import { z } from 'zod';

export const formSchema = z.object({
  description: z.string().min(5, 'Опис має бути не менше 5 символів'),
  price: z.number().min(1, 'Вкажіть ціну (від 1)'),
  district: z.number(),
  street: z.string().nonempty('Вкажіть вулицю'),
  buildingNum: z.string().nonempty('Вкажіть номер будинку'),
  roomsCount: z.number().min(1, 'Мінімум 1 кімната'),
  isPetFriendly: z.boolean(),
  isChildFriendly: z.boolean(),
  floor: z.number().min(0, 'Поверх не може бути від’ємним'),
  buildingFloorCount: z.number().min(1, 'Кількість поверхів має бути ≥ 1'),
  area: z.number().min(1, 'Площа має бути ≥ 1 м²'),
  furnitureType: z.number(),
  photosUrls: z
    .array(z.string().url('Некоректний URL фото').nonempty('Поле не може бути порожнім'))
    .min(1, 'Має бути хоча б одне фото'),
  owner: z.object({
    ownerName: z.string().nonempty('Вкажіть ім’я власника'),
    phoneNumber: z.string().regex(/^\+?[0-9\s\-]{7,15}$/, 'Некоректний номер телефону'),
  }),
});

export type SchemaType = z.infer<typeof formSchema>;
