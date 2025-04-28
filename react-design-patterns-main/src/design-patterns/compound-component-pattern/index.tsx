import ProductCard from "./components/product-card";
import { shoeData } from "./data";

export default function CompoundComponentPattern() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shoeData.map((shoe) => (
          <ProductCard key={shoe.id}>
            <ProductCard.Image src={shoe.image} alt={shoe.title} />
            <ProductCard.Title>{shoe.title}</ProductCard.Title>
            <ProductCard.Price>₹{shoe.price}</ProductCard.Price>
            <ProductCard.Description>{shoe.description}</ProductCard.Description>
          </ProductCard>
        ))}
      </div>
    </main>
  );
}
