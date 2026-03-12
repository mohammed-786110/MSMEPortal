import { Link } from "react-router-dom";
import { ShoppingBag, Heart, Sparkles, Package, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const orders = [
  { id: "ORD-2026-001", product: "Banarasi Silk Saree", status: "Shipped", date: "Feb 15, 2026", total: "₹13,350" },
  { id: "ORD-2026-002", product: "Kerala Spice Collection", status: "Delivered", date: "Jan 28, 2026", total: "₹1,850" },
  { id: "ORD-2026-003", product: "Blue Pottery Vase", status: "Processing", date: "Feb 20, 2026", total: "₹3,450" },
];

const BuyerDashboard = () => {
  return (
    <div className="container-custom py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-foreground">Welcome back, Anita!</h1>
        <p className="text-muted-foreground mt-1">Here's what's happening with your orders</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {[
          { icon: ShoppingBag, label: "Total Orders", value: "12", color: "text-primary" },
          { icon: Heart, label: "Saved Items", value: "8", color: "text-destructive" },
          { icon: Package, label: "In Transit", value: "2", color: "text-secondary" },
          { icon: Sparkles, label: "Rewards Points", value: "450", color: "text-primary" },
        ].map((stat) => (
          <div key={stat.label} className="bg-card p-5 rounded-xl border border-border">
            <stat.icon className={`h-6 w-6 ${stat.color} mb-2`} />
            <p className="text-2xl font-bold text-card-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* AI Recommendations */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="font-heading text-xl font-bold text-foreground">Recommended for You</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Order History */}
      <section className="mb-10">
        <h2 className="font-heading text-xl font-bold text-foreground mb-4">Order History</h2>
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-accent">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-foreground">Order ID</th>
                  <th className="text-left px-4 py-3 font-medium text-foreground">Product</th>
                  <th className="text-left px-4 py-3 font-medium text-foreground">Date</th>
                  <th className="text-left px-4 py-3 font-medium text-foreground">Total</th>
                  <th className="text-left px-4 py-3 font-medium text-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-t border-border">
                    <td className="px-4 py-3 font-medium text-foreground">{order.id}</td>
                    <td className="px-4 py-3 text-muted-foreground">{order.product}</td>
                    <td className="px-4 py-3 text-muted-foreground">{order.date}</td>
                    <td className="px-4 py-3 font-medium text-foreground">{order.total}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                        order.status === "Delivered" ? "bg-success/10 text-success" :
                        order.status === "Shipped" ? "bg-primary/10 text-primary" :
                        "bg-accent text-accent-foreground"
                      }`}>{order.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Saved Items */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading text-xl font-bold text-foreground">Saved Items</h2>
          <Link to="/products" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
            Browse More <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.slice(4, 8).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BuyerDashboard;
