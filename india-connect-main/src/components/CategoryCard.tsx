import { Link } from "react-router-dom";
import { Category } from "@/data/products";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link
      to={`/products?category=${category.id}`}
      className="group relative overflow-hidden rounded-xl aspect-[3/4] card-hover"
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="text-3xl mb-2 block">{category.icon}</span>
        <h3 className="font-heading text-lg font-bold text-primary-foreground">{category.name}</h3>
        <p className="text-sm text-primary-foreground/70 mt-1">{category.count} products</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
