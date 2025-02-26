import { useState,useEffect } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        // .then((res) => setData(res[currency]))
        .then((res) => {
            console.log(`Response is`);
            console.log(res);
            console.log(`currency is ${currency}`);
            console.log('res[currency is');
            console.log(res[currency]);
            console.log();
            return setData(res[currency])})
        .catch((e)=>{
            console.log("Some issue with the API!!!!!")
        })
        console.log("data is")
        console.log(data);
    }, [currency]);
    return data;
}

export default useCurrencyInfo;