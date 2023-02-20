import React, { useState, useEffect} from "react";
function PrintFavoriteColor(){
    const [favoriteColor, setfavoriteColor] = useState('blue')

    useEffect(() =>{
        const timeout = setTimeout(() => {
            setfavoriteColor('red')
        }, 1000);
        return () => {
            clearTimeout(timeout)
        }
        
    })

    return (
        <div>
            <h1>my favoriteColor is {favoriteColor}</h1>
            <div id="What"></div>
        </div>
    )
}
export default PrintFavoriteColor