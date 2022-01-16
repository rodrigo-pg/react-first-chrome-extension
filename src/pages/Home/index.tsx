import React, { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import "./styles.css";

function Home() {

    const [isToShowDate, setIsToShowDate] = useState(false)

    return (
        <div className="page-container">
            { isToShowDate && (
                <IoCloseSharp
                onClick={() => setIsToShowDate(false)}
                />
            )}
            <h1>
                {
                    isToShowDate ? (
                        "Today Is"
                    ) :  (
                        "What Day is Today ?"
                    )   
                }
            </h1>
            {
                isToShowDate ? (
                    <h2>{(new Date(Date.now())).toDateString()}</h2> 
                ) : (
                    <button type="button" onClick={() => setIsToShowDate(true)}>See date</button>
                )
            }
        </div>
    )
}

export { Home }