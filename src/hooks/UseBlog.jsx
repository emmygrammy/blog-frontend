import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getAllBlogs, deleteBlog, getBlogById, updateBlog, updateBlogImage } from "../api/BlogApi"

// Get all blogs
export const useBlogs =()=> {
    return useQuery({
        queryKey:['blogs'],
        queryFn:()=>getAllBlogs(),
    })
}

// Delete blog
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

// Get blog by id
export const useBlog = (id) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id),
    enabled: !!id,
  });
};

// Update blog
export const useUpdateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateBlog,

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });

      queryClient.invalidateQueries({
        queryKey: ["blog", variables.id],
      });
    },
  });
};

// Update blog image
export const useUpdateBlogImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => updateBlogImage(id, data),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });

      queryClient.invalidateQueries({
        queryKey: ["blog", variables.id],
      });
    },
  });
};