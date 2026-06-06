import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getAllQuestions, deleteQuestion, getQuestionById, updateQuestion } from "../api/cbtApi"

export const useQuestions =()=> {
    return useQuery({
        queryKey:['questions'],
        queryFn:()=>getAllQuestions(),
    })
}

 export const useDeleteQuestion = () => {
  const queryClient = useQueryClient();

   return useMutation({
    mutationFn: deleteQuestion,

     onSuccess: () => {
      queryClient.invalidateQueries({
       queryKey: ["questions"],
      });
    },
   });
 };

 // Get question by id
export const useQuestion = (id) => {
  return useQuery({
    queryKey: ["question", id],
    queryFn: () => getQuestionById(id),
    enabled: !!id,
  });
};

// Update question
export const useUpdateQuestion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateQuestion,

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["questions"],
      });

      queryClient.invalidateQueries({
        queryKey: ["question", variables.id],
      });
    },
  });
};