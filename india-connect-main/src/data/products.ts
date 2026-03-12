export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  exportCost: number;
  image: string;
  category: string;
  state: string;
  festival: string;
  artisan: {
    name: string;
    location: string;
    story: string;
    image: string;
  };
  rating: number;
  reviews: number;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  image: string;
}

export const categories: Category[] = [
  { id: "textiles", name: "Textiles & Fabrics", icon: "🧵", count: 234, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400" },
  { id: "jewelry", name: "Jewelry & Accessories", icon: "💎", count: 189, image: "https://images.unsplash.com/photo-1515562141589-67f0d569b60a?w=400" },
  { id: "pottery", name: "Pottery & Ceramics", icon: "🏺", count: 145, image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400" },
  { id: "spices", name: "Spices & Foods", icon: "🌶️", count: 312, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400" },
  { id: "paintings", name: "Art & Paintings", icon: "🎨", count: 98, image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400" },
  { id: "handicrafts", name: "Handicrafts", icon: "🪔", count: 276, image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Banarasi Silk Saree",
    description: "Handwoven Banarasi silk saree with intricate gold zari work. A timeless masterpiece from the looms of Varanasi, featuring traditional motifs passed down through generations.",
    price: 12500,
    exportCost: 850,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600",
    category: "textiles",
    state: "Uttar Pradesh",
    festival: "Diwali",
    artisan: { name: "Ramesh Kumar", location: "Varanasi, UP", story: "A fifth-generation weaver keeping the Banarasi tradition alive for over 30 years.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200" },
    rating: 4.8,
    reviews: 124,
    inStock: true,
  },
  {
    id: "2",
    name: "Madhubani Painting",
    description: "Original Madhubani painting on handmade paper depicting traditional Bihar folk art. Each piece tells a story of nature, mythology, and village life.",
    price: 3500,
    exportCost: 450,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600",
    category: "paintings",
    state: "Bihar",
    festival: "Chhath Puja",
    artisan: { name: "Sita Devi", location: "Madhubani, Bihar", story: "Award-winning Madhubani artist preserving this ancient art form for 25 years.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200" },
    rating: 4.9,
    reviews: 87,
    inStock: true,
  },
  {
    id: "3",
    name: "Blue Pottery Vase",
    description: "Exquisite Jaipur Blue Pottery vase handcrafted using traditional Persian techniques with Indian motifs. A stunning decorative piece for any home.",
    price: 2800,
    exportCost: 650,
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600",
    category: "pottery",
    state: "Rajasthan",
    festival: "Holi",
    artisan: { name: "Abdul Karim", location: "Jaipur, Rajasthan", story: "Master potter continuing the 600-year-old Blue Pottery tradition of Jaipur.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200" },
    rating: 4.7,
    reviews: 56,
    inStock: true,
  },
  {
    id: "4",
    name: "Kerala Spice Collection",
    description: "Premium collection of organic spices from the hills of Kerala – cardamom, black pepper, cinnamon, and cloves. Sourced directly from spice gardens.",
    price: 1500,
    exportCost: 350,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600",
    category: "spices",
    state: "Kerala",
    festival: "Onam",
    artisan: { name: "Priya Menon", location: "Idukki, Kerala", story: "Third-generation spice farmer growing organic spices in the Western Ghats.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200" },
    rating: 4.9,
    reviews: 203,
    inStock: true,
  },
  {
    id: "5",
    name: "Kundan Necklace Set",
    description: "Handcrafted Kundan jewelry set with uncut polki diamonds and precious stones. A regal piece inspired by Mughal-era craftsmanship.",
    price: 8500,
    exportCost: 550,
    image: "https://images.unsplash.com/photo-1515562141589-67f0d569b60a?w=600",
    category: "jewelry",
    state: "Rajasthan",
    festival: "Wedding Season",
    artisan: { name: "Govind Soni", location: "Jaipur, Rajasthan", story: "Master jeweler specializing in traditional Kundan and Meenakari work.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200" },
    rating: 4.6,
    reviews: 78,
    inStock: true,
  },
  {
    id: "6",
    name: "Brass Diya Set",
    description: "Set of 6 handcrafted brass diyas with intricate floral engravings. Perfect for Diwali celebrations and home decor.",
    price: 1200,
    exportCost: 400,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600",
    category: "handicrafts",
    state: "Tamil Nadu",
    festival: "Diwali",
    artisan: { name: "Murugan S", location: "Thanjavur, TN", story: "Brass artisan from the temple town of Thanjavur, crafting traditional items.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200" },
    rating: 4.5,
    reviews: 145,
    inStock: true,
  },
  {
    id: "7",
    name: "Pashmina Shawl",
    description: "Authentic Kashmiri Pashmina shawl with hand-embroidered paisley patterns. Made from the finest cashmere wool.",
    price: 15000,
    exportCost: 750,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600",
    category: "textiles",
    state: "Jammu & Kashmir",
    festival: "Eid",
    artisan: { name: "Farooq Ahmed", location: "Srinagar, J&K", story: "Pashmina weaver preserving the centuries-old craft of Kashmir.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200" },
    rating: 4.9,
    reviews: 67,
    inStock: true,
  },
  {
    id: "8",
    name: "Warli Art Frame",
    description: "Hand-painted Warli tribal art on canvas depicting village life, harvest celebrations, and nature's harmony.",
    price: 2200,
    exportCost: 500,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600",
    category: "paintings",
    state: "Maharashtra",
    festival: "Navratri",
    artisan: { name: "Jivya Mashe", location: "Palghar, Maharashtra", story: "Warli artist continuing the 2500-year-old tribal art tradition.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200" },
    rating: 4.7,
    reviews: 42,
    inStock: true,
  },
];

export const states = [
  "Uttar Pradesh", "Rajasthan", "Bihar", "Kerala", "Tamil Nadu",
  "Maharashtra", "Gujarat", "West Bengal", "Jammu & Kashmir", "Madhya Pradesh",
];

export const festivals = [
  "Diwali", "Holi", "Onam", "Eid", "Navratri", "Chhath Puja",
  "Christmas", "Pongal", "Wedding Season", "Durga Puja",
];
