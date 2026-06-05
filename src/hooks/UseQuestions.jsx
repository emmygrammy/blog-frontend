import { useQuery } from "@tanstack/react-query"
import { getAllQuestions } from "../api/cbtApi"

export const useQuestions =()=> {
    return useQuery({
        queryKey:['questions'],
        queryFn:()=>getAllQuestions(),
    })
}
