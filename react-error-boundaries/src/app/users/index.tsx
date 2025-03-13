import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { useUsers } from "@/api/users";

export const Users = () => {
  const { data, error, isLoading } = useUsers();

  if (isLoading) return <Skeleton className="h-20 w-full" />;
  if (error) throw error;

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Users</h1>
      <ul className="space-y-2">
        {data.map((user: any) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`} className="block p-2 bg-gray-100 rounded">
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
