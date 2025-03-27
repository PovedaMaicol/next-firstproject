import { useState, useEffect } from "react"

const useFetch = <T>(url: string): { data: T | null; loading: boolean; error: Error | null  } => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true)
          setError(null)
            try {
                const res = await fetch(url)
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                const json = await res.json()
                setData(json.data)
            } catch (err) {
                setError(err instanceof Error ? err : new Error("Unknown error"))
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])
return { data, loading, error }
  }

  export default useFetch