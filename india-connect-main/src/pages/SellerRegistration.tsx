import { useState } from "react";
import { Store, CheckCircle, Upload } from "lucide-react";

const productCategories = ["Textiles & Fabrics", "Jewelry & Accessories", "Pottery & Ceramics", "Spices & Foods", "Art & Paintings", "Handicrafts"];
const indianStates = ["Uttar Pradesh", "Rajasthan", "Bihar", "Kerala", "Tamil Nadu", "Maharashtra", "Gujarat", "West Bengal", "Jammu & Kashmir", "Madhya Pradesh", "Karnataka", "Andhra Pradesh"];

const SellerRegistration = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", msmeId: "", category: "", state: "", district: "", bankName: "", accountNo: "", ifsc: "",
  });

  const update = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center animate-fade-up">
          <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
          <h2 className="font-heading text-3xl font-bold text-foreground">Application Submitted!</h2>
          <p className="text-muted-foreground mt-2">Our team will review and approve your seller account within 48 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent mb-4">
            <Store className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-foreground">Seller Registration</h1>
          <p className="text-muted-foreground mt-2">Register your MSME or artisan business to reach the global Indian diaspora</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-xl border border-border">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Seller / Business Name *</label>
            <input required value={form.name} onChange={(e) => update("name", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition" placeholder="Your business name" />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">MSME Registration ID *</label>
            <input required value={form.msmeId} onChange={(e) => update("msmeId", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition" placeholder="UDYAM-XX-00-0000000" />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Product Category *</label>
            <select required value={form.category} onChange={(e) => update("category", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition">
              <option value="">Select category</option>
              {productCategories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">State *</label>
              <select required value={form.state} onChange={(e) => update("state", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition">
                <option value="">Select state</option>
                {indianStates.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">District *</label>
              <input required value={form.district} onChange={(e) => update("district", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition" placeholder="District" />
            </div>
          </div>

          {/* Bank Details */}
          <div className="p-4 rounded-xl bg-accent/50 border border-border">
            <h3 className="font-heading font-bold text-foreground mb-4">Bank Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Bank Name *</label>
                <input required value={form.bankName} onChange={(e) => update("bankName", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition" placeholder="Bank name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Account Number *</label>
                  <input required value={form.accountNo} onChange={(e) => update("accountNo", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition" placeholder="Account number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">IFSC Code *</label>
                  <input required value={form.ifsc} onChange={(e) => update("ifsc", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition" placeholder="IFSC code" />
                </div>
              </div>
            </div>
          </div>

          {/* Upload */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Product Catalog</label>
            <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Drag & drop or click to upload your product catalog</p>
              <p className="text-xs text-muted-foreground mt-1">PDF, Images (Max 10MB)</p>
            </div>
          </div>

          <button type="submit" className="btn-saffron w-full text-lg">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default SellerRegistration;
