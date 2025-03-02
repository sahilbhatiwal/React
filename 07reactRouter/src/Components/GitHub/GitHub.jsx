import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function GitHub(){
    const data = useLoaderData();
    const {userName} = useParams();
    // const [data, setData] = useState([]);
    // useEffect(() => {fetch(`https://api.github.com/users/${userName}`).then((res) => res.json()).then((res)=> { 
    // console.log(res)
    //  setData(res)
    // })},[])
    
    return (<div className=" bg-gray-400 text-center text-4xl p-4">
        {userName}  has {data.followers}  Followers
    </div>)
}

export const githubUserInfo = async ()=>{
    // const {userName} = "sahilbhatiwal";
    const response = await fetch(`https://api.github.com/users/sahilbhatiwal`);
    return response.json();
}