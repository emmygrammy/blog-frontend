import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getAllQuestions, deleteQuestion } from "../api/cbtApi"

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

