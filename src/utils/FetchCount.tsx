import React, { useEffect } from 'react'
import { Meta } from 'react-router-dom';

function Count() {
    const [count, setCount] = React.useState<string>("...");
  const username = "vikash_kumar_001";
  const url = `${import.meta.env.VITE_BACKEND_URL}/leetcode/${username}/solved`;
    
    useEffect(() => {
        async function fetchData() {
            try{
              const res = await fetch(url);
              if(res.status !== 200) {
                throw new Error(`Error: ${res.status}`);
              }
              const data = await res.json();
              setCount(data.totalSolved.toString());                
            } catch (error) {
              console.error("Error fetching data---------------->:", error);
              setCount("");
            }
        }
        fetchData();
    }, [username]);

  return (
    <span>{count}</span>
  )
}

export default Count; 