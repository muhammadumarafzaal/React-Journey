import { useState, useEffect } from "react"

const withData = (WrappedCompnent, url) => {
    return function EnhancedCompnent(props) {
        const [data, setData] = useState(null)
        const [isLoading, setIsLoading] = useState(true)
        useEffect(() => {
            fetch(url).then(res => res.json()).then(data => {
                setData(data)
                setIsLoading(false)
            })
        }, [])

        return (
            <>
                {isLoading ? (<p>  Loading..</p>) : (<WrappedCompnent {...props} data={data} />)}
            </>
        )
    }

}

export default withData
