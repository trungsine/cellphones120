import React from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/utils/axiosInstance";
import { Post } from "@/types/Post";

const fetchPosts = async (): Promise<Post[]> => {
  const { data } = await axiosInstance.get<Post[]>("/posts");
  return data;
};

const UserList: React.FC = () => {
  const { data, error, isLoading } = useQuery<Post[], Error>(
    ["posts"],
    fetchPosts
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
