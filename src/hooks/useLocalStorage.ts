import {useState,useEffect} from "react"
export function useLocalStorage<T>(key: string, initialValue:T|( ()=>T)){
    const [value,setValue]=useState<T>(()=>{
        const jsonValue=localStorage.getItem(key);
        // the inital value if we have value in a local storage will be set to value
        if(jsonValue!==null)return JSON.parse(jsonValue);
        //if no value in local storage
        if(typeof initialValue==="function"){
            return (initialValue as ()=>T)()
        }else{
            return initialValue 
        }

    })
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])
    return [ value ,setValue ] as [typeof value,typeof setValue]

}