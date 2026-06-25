import {useState,useEffect} from 'react'
// Custom hook to fetch data from an API
export default function useFetch(url) {
    const [data,setData]=useState(null);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        async function fetchData(){
            try{
                const response=await fetch(url);
                const json=await response.json();
                setData(json);
            }catch(error){
                console.error("Error fetching data:",error);
                setError(error);
            } finally{
                setLoading(false);
            }
        }
        fetchData();
    },[url]);
    return {data,error,loading};
    
}