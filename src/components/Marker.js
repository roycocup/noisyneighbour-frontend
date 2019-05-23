import React from "react"

export default class Marker extends React.Component
{

    render()
    {
        return (
            <div className={"marker"}>
                <img src={"./files/pin.png"} alt="" width="20px"/>
                <div style={{border:"1px solid red", height:"100px", width:"100px", color:"red"}}>{this.props.text}</div>
            </div>
        )
    }

}