import { useState, useEffect } from 'react'


/**
 * This hook is a call API 
 * @param {string} url
 * @return {Promise}
 */
export function useCall(url) {

    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!url) return

            setLoading(true)

            async function fetchData() {
                try {
                    const response = await fetch(url)
                    const data = await response.json()
                    setData(data)  
                } catch (error) {
                    console.log(error)
                    setError(true)
                } finally {
                    setLoading(false)
                }
            }

        fetchData()
    }, [url])

    return { isLoading, data, error }
}