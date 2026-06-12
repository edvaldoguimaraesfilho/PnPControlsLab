import * as React from 'react';
import { useState } from 'react';
import { FilterBar } from "@pnp/spfx-controls-react/lib/FilterBar";

interface IFilterBarItem {
  label: string;
  value: string;
}

const FilterBarComponent: React.FC = () => {

  const [filters, setFilters] = useState<IFilterBarItem[]>([
    { label: "Title", value: "title 1" },
    { label: "Field1", value: "value 1" },
    { label: "Title", value: "title 2" }
  ]);

  const onClearFilters = () => {
    console.log("Cleared all filters");
    setFilters([]);
  };

  const onRemoveFilter = (label: string, value: string) => {
    console.log(`Cleared ${label} ${value}`);

    const updatedFilters = filters.filter(
      (f) => !(f.label === label && f.value === value)
    );

    setFilters(updatedFilters);
  };

  return (
    <div>
      <FilterBar
        items={filters}
        inlineItemCount={3}
        onClearFilters={onClearFilters}
        onRemoveFilter={onRemoveFilter}
      />
    </div>
  );
};

export default FilterBarComponent;