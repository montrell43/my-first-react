import React from "react"
import Square from "./Square"

function Body() {
  return (
    <div style={{backgroundColor: "lightcoral", flex: 1, width: "100%", height: "100vh", padding: "50px", textAlign: "center", alignItems: "center"}}>
        <img src="src/assets/vacation.jpg" style={{borderRadius: "8px"}}/>
        <p>The places to go for an sweet vacation</p>

        <div style={{display: "flex", width: "100%", height: "100px", justifyContent: "center", alignContent: "center"}}>
            <Square name="Square 1" image="src/assets/island.jpg" />
            <Square name="Square 2" image="src/assets/palm.jpg" />
            <Square name="Square 3" image="src/assets/calm.jpg" />
        </div>
    </div>
  )
}

export default Body