import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  getAllQuestions,
  deleteQuestion,
  getQuestionById,
  updateQuestion,
} from "../api/cbtApi";

export const useQuestions = () => {
  return useQuery({
    queryKey: ["questions"],
    queryFn: getAllQuestions,
  });
};

export const useQuestion = (id) => {
  return useQuery({
    queryKey: ["question", id],
    queryFn: () => getQuestionById(id),
    enabled: Boolean(id),
  });
};

export const useDeleteQuestion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteQuestion,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["questions"],
      });

    },

    onError: () => {
      toast.error("Failed to delete question");
    },
  });
};

export const useUpdateQuestion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) =>
      updateQuestion(id, data),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["questions"],
      });

      queryClient.invalidateQueries({
        queryKey: ["question", variables.id],
      });

      toast.success("Question updated");
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          "Failed to update question"
      );
    },
  });
};