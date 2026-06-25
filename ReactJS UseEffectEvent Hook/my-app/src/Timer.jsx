import { useState, useEffect, useEffectEvent } from 'react'
function Timer() {
    const [count, setCount] = useState(0)
    const onTick = useEffectEvent(() => {
        console.log("Timer:", count)
        setCount(count => count + 1)

    })
    useEffect(() => {
        const timer = setInterval(onTick, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <div>
            <h1>Count:{count}</h1>


        </div>
    )
}
export default Timer
