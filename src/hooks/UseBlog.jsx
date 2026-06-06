import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getAllBlogs, deleteBlog } from "../api/BlogApi"


export const useBlogs =()=> {
    return useQuery({
        queryKey:['blogs'],
        queryFn:()=>getAllBlogs(),
    })
}

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBlog,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
    },
  });
};