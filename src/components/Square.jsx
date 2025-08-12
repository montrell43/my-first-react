import React from 'react'

function Square({name, image}) {
    const style = {
        width: "100px",
        height: "100px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        margin: "10px"
    }
  return (
    <div style={style}>{name}</div>
  )
}

export default Square