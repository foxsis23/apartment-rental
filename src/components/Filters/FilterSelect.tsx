import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function FilterSelect({
  label,
  value,
  onChange,
}: {
  label: string;
  value?: boolean | null;
  onChange: (value: string) => void;
}) {
  return (
    <div className="space-y-1">
      <label className="text-xs text-muted-foreground">{label}</label>

      <Select
        value={value === true ? 'true' : value === false ? 'false' : 'null'}
        onValueChange={onChange}
      >
        <SelectTrigger className="h-8 text-xs">
          <SelectValue placeholder="--" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="null">--</SelectItem>
          <SelectItem value="true">Так</SelectItem>
          <SelectItem value="false">Ні</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
