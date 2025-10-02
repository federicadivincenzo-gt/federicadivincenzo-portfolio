import axios from 'axios'
import useSWR from 'swr'


const fetcher = url => axios.get(url).then(res => res.data)

export const useFetchPost = ({id}) => {
    console.log(id)

    const { data, error, isLoading, isValidating, mutate } = useSWR(`/api/posts/${id}`, fetcher)

        console.log(data)
        console.log(isLoading)
    return {
        data,
        isLoading,
        isValidating,
        isError: error,
        mutate
    }

}