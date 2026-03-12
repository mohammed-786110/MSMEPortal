import { Package } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <Package className="h-12 w-12 text-primary animate-pulse" />
      <p className="text-muted-foreground text-sm font-medium">Loading...</p>
    </div>
  );
};

export default Loader;
