import { useParams, Link } from "react-router-dom";
import { Star, MapPin, Truck, ShoppingCart, ArrowLeft, Shield } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container-custom py-20 text-center">
        <p className="text-5xl mb-4">😢</p>
        <h2 className="font-heading text-2xl font-bold">Product not found</h2>
        <Link to="/products" className="btn-saffron mt-6 inline-block">Browse Products</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="container-custom py-8">
      <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to Products
      </Link>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Image */}
        <div className="rounded-xl overflow-hidden border border-border aspect-square">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Details */}
        <div>
          <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3">
            {product.category}
          </span>
          <h1 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">{product.name}</h1>

          <div className="flex items-center gap-3 mt-3">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-medium">{product.rating}</span>
            </div>
            <span className="text-muted-foreground text-sm">({product.reviews} reviews)</span>
            <span className="text-muted-foreground">•</span>
            <span className="flex items-center gap-1 text-muted-foreground text-sm">
              <MapPin className="h-3.5 w-3.5" /> {product.state}
            </span>
          </div>

          <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>

          <div className="mt-6 p-4 rounded-xl bg-accent/50 border border-border">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-foreground">₹{product.price.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
              <Truck className="h-4 w-4 text-primary" />
              <span>Export shipping via India Post: ₹{product.exportCost}</span>
            </div>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="btn-saffron w-full mt-6 inline-flex items-center justify-center gap-2 text-lg"
          >
            <ShoppingCart className="h-5 w-5" /> Add to Cart
          </button>

          <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
            <Shield className="h-4 w-4 text-success" />
            <span>Verified seller • Secure packaging • India Post tracked delivery</span>
          </div>

          {/* Artisan */}
          <div className="mt-8 p-5 rounded-xl bg-card border border-border">
            <h3 className="font-heading text-lg font-bold text-foreground mb-3">Artisan Story</h3>
            <div className="flex items-start gap-4">
              <img
                src={product.artisan.image}
                alt={product.artisan.name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
              />
              <div>
                <p className="font-semibold text-foreground">{product.artisan.name}</p>
                <p className="text-xs text-muted-foreground">{product.artisan.location}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{product.artisan.story}</p>
              </div>
            </div>
          </div>

          {/* Reviews placeholder */}
          <div className="mt-8">
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">Reviews</h3>
            {[5, 4, 5].map((stars, i) => (
              <div key={i} className="py-3 border-b border-border last:border-0">
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: stars }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  {["Beautiful craftsmanship! Exactly as described.", "Arrived safely via India Post. Very happy with purchase.", "Authentic and high quality. Will order again!"][i]}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  — {["Anita S., USA", "Raj P., UK", "Meera K., Singapore"][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
