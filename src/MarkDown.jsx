import React, { useEffect, useState } from 'react'
import ReactMarkdown from "react-markdown";

function MarkDown() {
    let [value,setValue] = useState()

    useEffect(() => {
      fetch("/default.txt")  // for this default.txt must be in public folder
        .then((response) => response.text())
        .then((text) => setValue(text))
        .catch((error) =>
          console.error("Error loading default text file:", error)
        );
    }, []);
  return (
    <>
    <h2 style={{textAlign:"center",marginTop:"20px"}}>Text to MarkDown</h2>
    <div className='container'>
        <div className='left'>
            <textarea value={value}  onChange={(e)=>setValue(e.target.value)} placeholder='Write your text'></textarea>
        </div>
        <div className='right'><ReactMarkdown>{value}</ReactMarkdown></div>
    </div>
    </>
  )
}

export default MarkDown