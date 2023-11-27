import {useState,useEffect} from 'react'

const useCurrencyInfoHook = (currency) => {
    const [data ,setData] = useState({})

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((resp)=>resp.json())
        .then((res)=> setData(res[currency]))
    },[currency])
  return  data

}

export default useCurrencyInfoHook