import { Link } from "react-router-dom";
import { ArrowRight, Package, Globe, Truck, Shield } from "lucide-react";
import { categories, products } from "@/data/products";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import heroBanner from "@/assets/hero-banner.jpg";

const steps = [
  { icon: Globe, title: "Browse & Discover", description: "Explore authentic Indian products from verified artisans and MSMEs across 29 states." },
  { icon: Package, title: "Place Your Order", description: "Select products, review export costs, and place your order with secure payment." },
  { icon: Truck, title: "Delivered via India Post", description: "Reliable shipping to 219 countries through India Post's trusted postal network." },
];

const featuredArtisans = [
  { name: "Ramesh Kumar", craft: "Banarasi Weaving", location: "Varanasi, UP", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300", years: 30 },
  { name: "Sita Devi", craft: "Madhubani Art", location: "Madhubani, Bihar", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300", years: 25 },
  { name: "Abdul Karim", craft: "Blue Pottery", location: "Jaipur, Rajasthan", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300", years: 20 },
  { name: "Priya Menon", craft: "Organic Spices", location: "Idukki, Kerala", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300", years: 15 },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="Indian handicrafts" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-hero opacity-85" />
        </div>
        <div className="relative container-custom py-20 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-sm mb-6">
              <Shield className="h-4 w-4" />
              <span>A Government of India Initiative</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Bringing India{" "}
              <span className="text-primary">Closer</span>{" "}
              to You
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
              Connecting 32 million Indians abroad with verified artisans, MSMEs, and cultural treasures — delivered reliably through India Post to 219 countries.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/products" className="btn-saffron inline-flex items-center gap-2">
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/register/seller" className="btn-navy inline-flex items-center gap-2 border border-primary-foreground/30">
                Register as Seller
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { value: "219", label: "Countries" },
                { value: "10K+", label: "Artisans" },
                { value: "50K+", label: "Products" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl lg:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-primary-foreground/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding gradient-section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              Explore <span className="text-gradient-saffron">Categories</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Discover authentic Indian products across diverse categories, each celebrating India's rich heritage.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              How It <span className="text-gradient-saffron">Works</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Three simple steps to get authentic Indian products delivered to your doorstep, anywhere in the world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="text-center group">
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <step.icon className="h-9 w-9 text-primary" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding gradient-section">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                Featured <span className="text-gradient-saffron">Products</span>
              </h2>
              <p className="mt-2 text-muted-foreground">Handpicked treasures from India's finest artisans</p>
            </div>
            <Link to="/products" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artisans */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              Meet Our <span className="text-gradient-saffron">Artisans</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              The skilled hands behind every product — preserving India's artistic legacy.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArtisans.map((artisan) => (
              <div key={artisan.name} className="text-center group card-hover bg-card rounded-xl p-6 border border-border">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 ring-3 ring-primary/20 group-hover:ring-primary/50 transition-all">
                  <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="font-heading font-bold text-card-foreground">{artisan.name}</h3>
                <p className="text-primary text-sm font-medium">{artisan.craft}</p>
                <p className="text-xs text-muted-foreground mt-1">{artisan.location}</p>
                <p className="text-xs text-muted-foreground mt-1">{artisan.years}+ years experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="relative container-custom text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground">
            Ready to Explore India's Finest?
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-lg mx-auto">
            Join thousands of Indians abroad who are staying connected to their roots through authentic products.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/register/buyer" className="btn-saffron">Get Started Today</Link>
            <Link to="/register/seller" className="btn-navy border border-primary-foreground/30">Become a Seller</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
