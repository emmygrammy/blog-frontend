import { useQuery } from "@tanstack/react-query"
import { getAllBlogs } from "../api/BlogApi"


export const useBlogs =()=> {
    return useQuery({
        queryKey:['blogs'],
        queryFn:()=>getAllBlogs(),
    })
}