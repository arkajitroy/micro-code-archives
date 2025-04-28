import { TUser } from "../types";

type UserListsProps = {
  users: Array<TUser>;
  isLoading: boolean;
  error: boolean;
};

export default function UserLists({ users, isLoading, error }: UserListsProps) {
  if (isLoading) return <main className="text-blue-700">Loading...</main>;
  if (error) return <main className="text-red-600">Error</main>;
  if (users.length === 0) return <main className="text-red-600">No user data!</main>;

  console.log("users", users);

  return (
    <main>
      <span className="font-bold">User List</span>
      <div className="flex flex-col">
        {users.length &&
          users.map((user) => (
            <div
              key={user.id}
              className="flex flex-row space-x-4 items-center my-2 p-2 border border-gray-200 rounded-md"
            >
              <img
                src={user.avatar}
                alt={user.first_name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-bold text-gray-800">
                  {user.first_name} {user.last_name}
                </p>
                <p className="text-gray-500">{user.email}</p>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
