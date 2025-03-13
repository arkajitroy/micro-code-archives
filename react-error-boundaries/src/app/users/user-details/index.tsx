import { useParams } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { useUser } from "@/api/users";

export const UserDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useUser(id!);

  if (isLoading) return <Skeleton className="h-20 w-full" />;
  if (error) throw error;

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">
        {data.firstName} {data.lastName}
      </h1>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
    </div>
  );
};
