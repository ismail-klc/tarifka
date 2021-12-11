import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url: string) {
    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<any>(null)

    const fetchData = async () => {
        try {
            const res = await axios.get(url)
            setData(res.data)
            setLoading(false)
        } catch (error: any) {
            setError(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { data, loading, error }
}