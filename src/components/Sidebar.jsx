import React, { useState } from 'react'

function Sidebar() {
    const prevColor = "black";
    const [bgColor, setBgColor] = useState(prevColor);
    
    const colorClick = (color) => {
        setBgColor((prev) => (prev === color ? prevColor: color))
    }
  return (
    <aside style={{backgroundColor: bgColor, padding: "20px", width: "200px", color: "white"}}>
        <h3>Choose a Color:</h3>
        <ul style={{listStyle: "none", padding: 0}}>
            <li onClick={() => colorClick("lightblue")} style=       {{cursor: "pointer", marginBottom: "10px"}}>
                Light Blue
            </li>
            <li onClick={() => colorClick("blue")} style=       {{cursor: "pointer", marginBottom: "10px"}}>
                Blue
            </li>
            <li onClick={() => colorClick("salmon")} style=       {{cursor: "pointer", marginBottom: "10px"}}>
                Salmon
            </li>
        </ul>
        </aside>
  )
}

export default Sidebar