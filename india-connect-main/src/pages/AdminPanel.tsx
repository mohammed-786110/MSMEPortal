import { Users, Globe, Package, Truck, CheckCircle, XCircle, Clock } from "lucide-react";

const pendingSellers = [
  { name: "Lakshmi Textiles", msme: "UDYAM-TN-02-0012345", category: "Textiles", state: "Tamil Nadu", date: "Feb 22, 2026" },
  { name: "Rajput Pottery Works", msme: "UDYAM-RJ-06-0098765", category: "Pottery", state: "Rajasthan", date: "Feb 21, 2026" },
  { name: "Kerala Spice Garden", msme: "UDYAM-KL-11-0054321", category: "Spices", state: "Kerala", date: "Feb 20, 2026" },
];

const diasporaStats = [
  { country: "United States", buyers: 4520, orders: 12300, revenue: "₹1.2Cr" },
  { country: "United Kingdom", buyers: 3210, orders: 8900, revenue: "₹87L" },
  { country: "Canada", buyers: 2100, orders: 5600, revenue: "₹54L" },
  { country: "Australia", buyers: 1800, orders: 4200, revenue: "₹41L" },
  { country: "Singapore", buyers: 1500, orders: 3800, revenue: "₹36L" },
];

const AdminPanel = () => {
  return (
    <div className="container-custom py-8">
      <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Admin Panel</h1>
      <p className="text-muted-foreground mb-8">Manage sellers, analytics, and shipments</p>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {[
          { icon: Users, label: "Total Sellers", value: "1,247" },
          { icon: Globe, label: "Countries Served", value: "89" },
          { icon: Package, label: "Active Listings", value: "8,432" },
          { icon: Truck, label: "Shipments Active", value: "342" },
        ].map((stat) => (
          <div key={stat.label} className="bg-card p-5 rounded-xl border border-border">
            <stat.icon className="h-6 w-6 text-primary mb-2" />
            <p className="text-2xl font-bold text-card-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Pending Sellers */}
      <section className="mb-10">
        <h2 className="font-heading text-xl font-bold text-foreground mb-4">Pending Seller Approvals</h2>
        <div className="space-y-3">
          {pendingSellers.map((seller) => (
            <div key={seller.msme} className="bg-card rounded-xl border border-border p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-foreground">{seller.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {seller.msme} • {seller.category} • {seller.state} • Applied {seller.date}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-success text-success-foreground text-sm font-medium hover:brightness-110 transition">
                  <CheckCircle className="h-4 w-4" /> Approve
                </button>
                <button className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-destructive text-destructive-foreground text-sm font-medium hover:brightness-110 transition">
                  <XCircle className="h-4 w-4" /> Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Diaspora Analytics */}
      <section className="mb-10">
        <h2 className="font-heading text-xl font-bold text-foreground mb-4">Diaspora Analytics</h2>
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-accent">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-foreground">Country</th>
                  <th className="text-left px-4 py-3 font-medium text-foreground">Registered Buyers</th>
                  <th className="text-left px-4 py-3 font-medium text-foreground">Total Orders</th>
                  <th className="text-left px-4 py-3 font-medium text-foreground">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {diasporaStats.map((row) => (
                  <tr key={row.country} className="border-t border-border">
                    <td className="px-4 py-3 font-medium text-foreground">{row.country}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.buyers.toLocaleString()}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.orders.toLocaleString()}</td>
                    <td className="px-4 py-3 font-medium text-foreground">{row.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Shipment Monitor */}
      <section>
        <h2 className="font-heading text-xl font-bold text-foreground mb-4">Shipment Monitor</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Processing", count: 45, icon: Clock, color: "text-primary" },
            { label: "In Transit", count: 189, icon: Truck, color: "text-secondary" },
            { label: "Delivered", count: 1247, icon: CheckCircle, color: "text-success" },
          ].map((item) => (
            <div key={item.label} className="bg-card rounded-xl border border-border p-6 text-center">
              <item.icon className={`h-8 w-8 ${item.color} mx-auto mb-2`} />
              <p className="text-3xl font-bold text-card-foreground">{item.count}</p>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminPanel;
