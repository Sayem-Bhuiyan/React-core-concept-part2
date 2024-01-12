import { useState } from "react"

export default function Student (){
    const [total, setTotal] = useState(0);

    const divStyle = {
        border: '2px solid yellow',
        margin: '20px',
        padding: '20px',
        borderRadius: '8px'
    }
    return(
        <div style={divStyle}>
            <h3>Total Admission: {total}</h3>

            <button
            style={{
                marginRight: '15px',
            }} 
            onClick={() => setTotal(total + 1)}
            >Add New</button>
            <button
                onClick={() => {
                    if(total < 1){
                        return;
                    }
                    const canceOne = total - 1;
                    setTotal(canceOne);
                }}
            >Cancel One</button>
        </div>
    )
}