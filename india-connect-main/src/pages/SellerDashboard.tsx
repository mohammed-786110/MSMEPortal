import { useState } from "react";
import { Package, IndianRupee, TrendingUp, ShoppingCart, Plus, X } from "lucide-react";

const sellerOrders = [
  { id: "ORD-001", buyer: "Anita S., USA", product: "Banarasi Silk Saree", amount: "₹12,500", status: "Shipped", date: "Feb 18, 2026" },
  { id: "ORD-002", buyer: "Raj P., UK", product: "Blue Pottery Vase", amount: "₹2,800", status: "Processing", date: "Feb 20, 2026" },
  { id: "ORD-003", buyer: "Meera K., Singapore", product: "Madhubani Painting", amount: "₹3,500", status: "Delivered", date: "Feb 10, 2026" },
];

const SellerDashboard = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);

  return (
    <div className="container-custom py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground">Seller Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage your products and orders</p>
        </div>
        <button onClick={() => setShowAddProduct(true)} className="btn-saffron inline-flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add Product
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {[
          { icon: ShoppingCart, label: "Total Orders", value: "47" },
          { icon: IndianRupee, label: "Revenue", value: "₹2.8L" },
          { icon: Package, label: "Products Listed", value: "12" },
          { icon: TrendingUp, label: "This Month", value: "+23%" },
        ].map((stat) => (
          <div key={stat.label} className="bg-card p-5 rounded-xl border border-border">
            <stat.icon className="h-6 w-6 text-primary mb-2" />
            <p className="text-2xl font-bold text-card-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Revenue Chart Placeholder */}
      <div className="bg-card rounded-xl border border-border p-6 mb-10">
        <h2 className="font-heading text-lg font-bold text-foreground mb-4">Revenue Analytics</h2>
        <div className="h-48 flex items-center justify-center bg-accent/50 rounded-lg">
          <div className="text-center">
            <TrendingUp className="h-10 w-10 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Revenue chart will be displayed here</p>
          </div>
        </div>
      </div>

      {/* Orders */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="font-heading text-lg font-bold text-foreground">Recent Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-accent">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-foreground">Order ID</th>
                <th className="text-left px-4 py-3 font-medium text-foreground">Buyer</th>
                <th className="text-left px-4 py-3 font-medium text-foreground">Product</th>
                <th className="text-left px-4 py-3 font-medium text-foreground">Amount</th>
                <th className="text-left px-4 py-3 font-medium text-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {sellerOrders.map((order) => (
                <tr key={order.id} className="border-t border-border">
                  <td className="px-4 py-3 font-medium text-foreground">{order.id}</td>
                  <td className="px-4 py-3 text-muted-foreground">{order.buyer}</td>
                  <td className="px-4 py-3 text-muted-foreground">{order.product}</td>
                  <td className="px-4 py-3 font-medium text-foreground">{order.amount}</td>
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

      {/* Add Product Modal */}
      {showAddProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50">
          <div className="bg-card rounded-xl border border-border p-8 max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xl font-bold text-foreground">Add New Product</h2>
              <button onClick={() => setShowAddProduct(false)} className="p-1 rounded hover:bg-accent"><X className="h-5 w-5" /></button>
            </div>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowAddProduct(false); }}>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Product Name *</label>
                <input className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition" placeholder="Product name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Description *</label>
                <textarea className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition" rows={3} placeholder="Product description" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Price (₹) *</label>
                  <input type="number" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition" placeholder="0" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Category *</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition">
                    <option>Textiles</option><option>Jewelry</option><option>Pottery</option><option>Spices</option><option>Art</option><option>Handicrafts</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn-saffron w-full">Add Product</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerDashboard;
