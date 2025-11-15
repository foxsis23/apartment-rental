import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Filter, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { FilterNumber } from './FilterNumber';
import { FilterSelect } from '@/components/Filters/FilterSelect';
import { useSearchParams } from 'react-router';

export function Filters({ onApply }: { onApply: (query: string) => void }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<any>({});

  useEffect(() => {
    const obj: any = {};
    searchParams.forEach((v, k) => {
      obj[k.charAt(0).toLowerCase() + k.slice(1)] = v === 'true' ? true : v === 'false' ? false : v;
    });
    setFilters(obj);
  }, [searchParams]);

  const update = (key: string, value: any) =>
    setFilters((prev: any) => ({ ...prev, [key]: value }));

  const applyFilters = () => {
    const params: any = {};
    Object.entries(filters).forEach(([k, v]) => {
      if (v !== null && v !== undefined && v !== '') {
        params[k.charAt(0).toUpperCase() + k.slice(1)] = String(v);
      }
    });
    setSearchParams(params);
    onApply('?' + new URLSearchParams(params).toString());
  };

  const clearFilters = () => {
    setFilters({});
    setSearchParams({});
    onApply('');
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter size={16} />
          Фільтри
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[330px] p-4 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <FilterSelect
            label="З тваринами"
            value={filters.isPetFriendly}
            onChange={(v) =>
              update('isPetFriendly', v === 'true' ? true : v === 'false' ? false : null)
            }
          />

          <FilterSelect
            label="З дітьми"
            value={filters.isChildFriendly}
            onChange={(v) =>
              update('isChildFriendly', v === 'true' ? true : v === 'false' ? false : null)
            }
          />

          <FilterNumber
            label="Мін. поверх"
            keyName="minFloor"
            value={filters.minFloor}
            update={update}
          />
          <FilterNumber
            label="Макс. поверх"
            keyName="maxFloor"
            value={filters.maxFloor}
            update={update}
          />

          <FilterNumber
            label="Мін. площа"
            keyName="minArea"
            value={filters.minArea}
            update={update}
          />
          <FilterNumber
            label="Макс. площа"
            keyName="maxArea"
            value={filters.maxArea}
            update={update}
          />

          <FilterNumber
            label="Мін. ціна"
            keyName="minPrice"
            value={filters.minPrice}
            update={update}
          />
          <FilterNumber
            label="Макс. ціна"
            keyName="maxPrice"
            value={filters.maxPrice}
            update={update}
          />

          <FilterNumber
            label="Мін. кімнат"
            keyName="minRoomsCount"
            value={filters.minRoomsCount}
            update={update}
          />
          <FilterNumber
            label="Макс. кімнат"
            keyName="maxRoomsCount"
            value={filters.maxRoomsCount}
            update={update}
          />
        </div>

        <div className="flex gap-2">
          <Button className="flex-1 bg-orange-500 hover:bg-orange-600" onClick={applyFilters}>
            Застосувати
          </Button>

          <Button variant="outline" onClick={clearFilters}>
            <X size={16} />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
