import axios from 'axios'
import useSWR from "swr";


const fetcher = url => axios.get(url).then(res => res.data)

export const useFetchPosts = () => {
    const { data, error, isLoading, isValidating, mutate } = useSWR('/api/posts', fetcher)


    return {
        data,
        isLoading,
        isValidating,
        isError: error,
        mutate
    }

}