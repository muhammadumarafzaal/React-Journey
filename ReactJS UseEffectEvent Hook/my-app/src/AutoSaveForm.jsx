import { useState, useEffect, useEffectEvent } from "react"
function AutoSaveForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const autoSave = useEffectEvent(() => {
        console.log("Auto Save", formData)
    })
    useEffect(() => {
        const interval = setInterval(() => {
            autoSave()
        }, 3000)
        return () => {
            clearInterval(interval)
        }
    }, [formData])
    return (
        <form action="">
            <input type="text" placeholder="Name" value={formData.name} onChange={(e => setFormData({ ...formData, name: e.target.value }))} />
            <input type="email" placeholder="Email" value={formData.email} onChange={(e => setFormData({ ...formData, email: e.target.value }))} />
            <input type="password" placeholder="Password" value={formData.password} onChange={(e => setFormData({ ...formData, password: e.target.value }))} />
        </form>


    )
}
export default AutoSaveForm