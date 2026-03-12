import { Link } from "react-router-dom";
import { Star, MapPin, ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden card-hover group">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
              {product.category}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="font-heading text-lg font-semibold text-card-foreground line-clamp-1 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mt-1 text-muted-foreground text-xs">
          <MapPin className="h-3 w-3" />
          <span>{product.artisan.location}</span>
        </div>

        <div className="flex items-center gap-1 mt-2">
          <Star className="h-3.5 w-3.5 fill-primary text-primary" />
          <span className="text-sm font-medium text-card-foreground">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        <div className="flex items-end justify-between mt-3">
          <div>
            <p className="text-xl font-bold text-card-foreground">₹{product.price.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">+ ₹{product.exportCost} shipping</p>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="p-2.5 rounded-lg bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
