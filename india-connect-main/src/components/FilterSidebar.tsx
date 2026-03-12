import { categories, states, festivals } from "@/data/products";
import { X, SlidersHorizontal } from "lucide-react";

interface FilterSidebarProps {
  filters: {
    category: string;
    state: string;
    festival: string;
    priceRange: [number, number];
  };
  setFilters: (filters: any) => void;
  isOpen: boolean;
  onClose: () => void;
}

const FilterSidebar = ({ filters, setFilters, isOpen, onClose }: FilterSidebarProps) => {
  const updateFilter = (key: string, value: any) => {
    setFilters((prev: any) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-foreground/50 z-40 lg:hidden" onClick={onClose} />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-card border-r border-border z-50 p-6 overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0 lg:z-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5 text-primary" />
            <h3 className="font-heading text-lg font-bold">Filters</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded hover:bg-accent">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-2 mb-6">
          <SlidersHorizontal className="h-5 w-5 text-primary" />
          <h3 className="font-heading text-lg font-bold">Filters</h3>
        </div>

        {/* Category */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-3">Category</h4>
          <select
            value={filters.category}
            onChange={(e) => updateFilter("category", e.target.value)}
            className="w-full p-2.5 rounded-lg border border-input bg-background text-foreground text-sm"
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>

        {/* State */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-3">State</h4>
          <select
            value={filters.state}
            onChange={(e) => updateFilter("state", e.target.value)}
            className="w-full p-2.5 rounded-lg border border-input bg-background text-foreground text-sm"
          >
            <option value="">All States</option>
            {states.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Festival */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-3">Festival</h4>
          <select
            value={filters.festival}
            onChange={(e) => updateFilter("festival", e.target.value)}
            className="w-full p-2.5 rounded-lg border border-input bg-background text-foreground text-sm"
          >
            <option value="">All Festivals</option>
            {festivals.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-3">Max Price</h4>
          <input
            type="range"
            min="0"
            max="20000"
            step="500"
            value={filters.priceRange[1]}
            onChange={(e) => updateFilter("priceRange", [0, Number(e.target.value)])}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>₹0</span>
            <span>₹{filters.priceRange[1].toLocaleString()}</span>
          </div>
        </div>

        {/* Clear */}
        <button
          onClick={() =>
            setFilters({ category: "", state: "", festival: "", priceRange: [0, 20000] })
          }
          className="w-full py-2.5 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:bg-accent transition-colors"
        >
          Clear All Filters
        </button>
      </aside>
    </>
  );
};

export default FilterSidebar;
