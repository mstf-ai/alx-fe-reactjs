// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

function PostsComponent() {
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5,          // 5 دقائق تبقى البيانات حديثة قبل إعادة التحميل
    cacheTime: 1000 * 60 * 10,         // 10 دقائق تخزن البيانات في الكاش بعد عدم الاستخدام
    refetchOnWindowFocus: true,        // يعيد تحميل البيانات عند العودة إلى نافذة المتصفح
    keepPreviousData: true,            // يحافظ على البيانات السابقة أثناء إعادة التحميل
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refreshing..." : "Refresh Posts"}
      </button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
