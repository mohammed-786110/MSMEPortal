import { useState } from "react";
import { UserPlus, CheckCircle } from "lucide-react";

const countries = ["United States", "United Kingdom", "Canada", "Australia", "Singapore", "UAE", "Germany", "New Zealand", "South Africa", "Malaysia"];
const incomeRanges = ["Under $25,000", "$25,000–$50,000", "$50,000–$100,000", "$100,000–$200,000", "Above $200,000"];
const productPrefs = ["Textiles", "Jewelry", "Spices", "Pottery", "Art", "Handicrafts"];
const festivalOptions = ["Diwali", "Holi", "Onam", "Eid", "Navratri", "Christmas", "Pongal"];
const buyingFreqs = ["Monthly", "Quarterly", "Bi-annually", "Annually", "Occasional"];

const BuyerRegistration = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", country: "", income: "", preferences: [] as string[], festivals: [] as string[], frequency: "",
  });

  const update = (key: string, value: any) => setForm((prev) => ({ ...prev, [key]: value }));
  const toggleArray = (key: string, val: string) => {
    const arr = form[key as keyof typeof form] as string[];
    update(key, arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center animate-fade-up">
          <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
          <h2 className="font-heading text-3xl font-bold text-foreground">Registration Successful!</h2>
          <p className="text-muted-foreground mt-2">Welcome to India Post Diaspora. Start exploring products now.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent mb-4">
            <UserPlus className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-foreground">Buyer Registration</h1>
          <p className="text-muted-foreground mt-2">Join the global Indian community and access authentic products</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-xl border border-border">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
            <input required value={form.name} onChange={(e) => update("name", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition" placeholder="Enter your full name" />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
            <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition" placeholder="your@email.com" />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Country of Residence *</label>
            <select required value={form.country} onChange={(e) => update("country", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition">
              <option value="">Select country</option>
              {countries.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          {/* Income */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Annual Income Range</label>
            <select value={form.income} onChange={(e) => update("income", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition">
              <option value="">Select range</option>
              {incomeRanges.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>

          {/* Product Preferences */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Product Preferences</label>
            <div className="flex flex-wrap gap-2">
              {productPrefs.map((p) => (
                <button key={p} type="button" onClick={() => toggleArray("preferences", p)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                    form.preferences.includes(p) ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:bg-accent"
                  }`}>{p}</button>
              ))}
            </div>
          </div>

          {/* Festival Interests */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Festival Interests</label>
            <div className="flex flex-wrap gap-2">
              {festivalOptions.map((f) => (
                <button key={f} type="button" onClick={() => toggleArray("festivals", f)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                    form.festivals.includes(f) ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:bg-accent"
                  }`}>{f}</button>
              ))}
            </div>
          </div>

          {/* Buying Frequency */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Buying Frequency</label>
            <select value={form.frequency} onChange={(e) => update("frequency", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition">
              <option value="">Select frequency</option>
              {buyingFreqs.map((f) => <option key={f} value={f}>{f}</option>)}
            </select>
          </div>

          <button type="submit" className="btn-saffron w-full text-lg">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default BuyerRegistration;
