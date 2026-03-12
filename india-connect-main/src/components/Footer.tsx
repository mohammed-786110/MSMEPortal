import { Link } from "react-router-dom";
import { Package, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Package className="h-8 w-8 text-primary" />
              <span className="font-heading text-xl font-bold">India Post</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Connecting the Indian diaspora with authentic artisans, MSMEs, and cultural products through reliable India Post shipping.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <div className="space-y-3">
              {[
                { to: "/products", label: "Browse Products" },
                { to: "/register/seller", label: "Become a Seller" },
                { to: "/register/buyer", label: "Register as Buyer" },
                { to: "/dashboard/buyer", label: "My Dashboard" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-primary">Categories</h4>
            <div className="space-y-3">
              {["Textiles & Fabrics", "Jewelry", "Pottery", "Spices", "Art & Paintings", "Handicrafts"].map((cat) => (
                <Link key={cat} to="/products" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-primary">Contact Us</h4>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@indiapost-diaspora.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 11 2303 6725</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Dak Bhawan, Sansad Marg, New Delhi – 110001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-60">
            © 2026 India Post – Bridge for Indian Diaspora. A Government of India Initiative.
          </p>
          <div className="flex items-center gap-1 text-xs opacity-60">
            <span>🇮🇳</span>
            <span>Made in India, for Indians everywhere</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
