import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Checkbox } from '@/components/ui/checkbox.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Plus, Trash2 } from 'lucide-react';
import { formSchema, type SchemaType } from '@/components/ApartmentForm/validationSchema.ts';
import ApartmentApi from '@/lib/api/apartmentApi.ts';
import { toast } from 'sonner';
import { useNavigate } from 'react-router';
import type { Apartment } from '@/lib/types';

interface ApartmentFormProps {
  apartment?: Apartment;
}

export const ApartmentForm = ({ apartment }: ApartmentFormProps) => {
  const navigate = useNavigate();
  const form = useForm<SchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: !apartment
      ? {
          description: '',
          price: 0,
          district: 1,
          street: '',
          buildingNum: '',
          roomsCount: 1,
          isPetFriendly: false,
          isChildFriendly: false,
          floor: 1,
          buildingFloorCount: 1,
          area: 0,
          furnitureType: 1,
          photosUrls: [''],
          owner: {
            ownerName: '',
            phoneNumber: '',
          },
        }
      : {
          ...apartment,
          owner: {
            ownerName: apartment.ownerName,
            phoneNumber: apartment.ownerNumber,
          },
        },
  });

  const { control, handleSubmit } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'photosUrls' as never,
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (apartment) {
      await ApartmentApi.updateApartment({
        ...values,
        id: apartment.id,
        ownerNumber: values.owner.phoneNumber,
        phoneNumber: values.owner.phoneNumber,
        ownerName: values.owner.ownerName,
      });
    }
    await ApartmentApi.createAparment({
      ...values,
      ownerNumber: values.owner.phoneNumber,
      phoneNumber: values.owner.phoneNumber,
      ownerName: values.owner.ownerName,
    });

    form.reset();
    toast.success(apartment ? 'Оголошення відредаговано!' : 'Оголошення успішно створено!');
    navigate('/organizers');
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl mx-auto p-4 md:p-0">
        <FormField
          control={control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Опис</FormLabel>
              <FormControl>
                <Textarea placeholder="Короткий опис квартири" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ціна ($)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Вулиця</FormLabel>
                <FormControl>
                  <Input placeholder="вул. Хрещатик" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="buildingNum"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Будинок</FormLabel>
                <FormControl>
                  <Input placeholder="12Б" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={control}
            name="roomsCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Кімнат</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="floor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Поверх</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="area"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Площа (м²)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-6">
          <FormField
            control={control}
            name="isPetFriendly"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel>З тваринами</FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="isChildFriendly"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel>З дітьми</FormLabel>
              </FormItem>
            )}
          />
        </div>

        <div>
          <FormLabel className="mb-2">Фото (URL)</FormLabel>
          <div className="space-y-2">
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-2 items-center">
                <FormField
                  control={control}
                  name={`photosUrls.${index}`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input placeholder="https://example.com/photo.jpg" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="text-orange-600 hover:text-orange-700 cursor-pointer"
                  onClick={() => remove(index)}
                >
                  <Trash2 size={18} />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="text-orange-600 hover:text-orange-700 cursor-pointer"
              onClick={() => append('')}
            >
              <Plus size={18} />
            </Button>
          </div>
        </div>

        <FormField
          control={control}
          name="owner.ownerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ім’я власника</FormLabel>
              <FormControl>
                <Input placeholder="Іван Петрович" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="owner.phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Телефон</FormLabel>
              <FormControl>
                <Input placeholder="+380671234567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
          Зберегти
        </Button>
      </form>
    </Form>
  );
};
