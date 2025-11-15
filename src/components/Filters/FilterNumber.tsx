import { Input } from '@/components/ui/input';

export function FilterNumber({
  label,
  keyName,
  value,
  update,
}: {
  label: string;
  keyName: string;
  value?: string | number | undefined;
  update: (k: string, v: number | undefined) => void;
}) {
  return (
    <div className="space-y-1">
      <label className="text-xs text-muted-foreground">{label}</label>

      <Input
        type="number"
        className="h-8 text-xs"
        value={value ?? ''} // <<<<<< FIX
        onChange={(e) =>
          update(keyName, e.target.value === '' ? undefined : Number(e.target.value))
        }
      />
    </div>
  );
}
