import { useProducts } from "@/api/products";
import { Skeleton } from "@/components/ui/skeleton";

export const Products = () => {
  const { data, error, isLoading } = useProducts();

  if (isLoading) return <Skeleton className="h-20 w-full" />;
  if (error) throw error;

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Products</h1>
      <ul className="space-y-2">
        {data.map((product: any) => (
          <li key={product.id} className="p-2 bg-gray-100 rounded">
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
