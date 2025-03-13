import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await api.get("/users");
      return data.users;
    },
  });
};

export const useUser = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const { data } = await api.get(`/users/${id}`);
      return data;
    },
  });
};
