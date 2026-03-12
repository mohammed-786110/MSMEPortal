import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";

const ProductListing = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";

  const [filters, setFilters] = useState({
    category: initialCategory,
    state: "",
    festival: "",
    priceRange: [0, 20000] as [number, number],
  });
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (filters.category && p.category !== filters.category) return false;
      if (filters.state && p.state !== filters.state) return false;
      if (filters.festival && p.festival !== filters.festival) return false;
      if (p.price > filters.priceRange[1]) return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="container-custom py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground">Our Products</h1>
          <p className="text-muted-foreground text-sm mt-1">{filtered.length} products found</p>
        </div>
        <button
          className="lg:hidden inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-accent transition-colors"
          onClick={() => setFilterOpen(true)}
        >
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
      </div>

      <div className="flex gap-8">
        <FilterSidebar filters={filters} setFilters={setFilters} isOpen={filterOpen} onClose={() => setFilterOpen(false)} />
        <div className="flex-1">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">🏺</p>
              <h3 className="font-heading text-xl font-bold text-foreground">No products found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
