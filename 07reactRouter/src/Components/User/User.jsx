import React from "react";
import { useParams } from "react-router-dom";
export default function User() {
    const {userId} = useParams(); 
    return(
        <h1 className=" text-center text-4xl font-bold bg-gray-500">User: {userId}</h1>
    )
}