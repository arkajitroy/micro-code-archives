import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import UserLists from "../components/user-lists";
import { TUser } from "../types";

const UserContainer: React.FC = () => {
  const [users, setUsers] = useState<Array<TUser>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchUsersRequest = async () => {
    setIsLoading(true);
    const API_URL = "https://reqres.in/api/users";
    try {
      const response = await axios.get(API_URL);
      const { data } = response.data;
      setUsers(data);
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUsersRequest();
  }, []);

  return (
    <div>
      <UserLists users={users} isLoading={isLoading} error={error} />
    </div>
  );
};

export default UserContainer;
