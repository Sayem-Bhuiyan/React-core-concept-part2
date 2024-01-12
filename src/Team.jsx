import { useState } from "react"

export default function Team (){
    const [teamCount, setTeamCount] = useState(11);

    const handleAdd = () => {
        const newTeamCount = teamCount + 1;
        setTeamCount(newTeamCount);
    }

    const handleRemove = () => {
        if(teamCount > 11){
            const removeCount = teamCount - 1;
            return setTeamCount(removeCount)
            
        }
        return alert(`player can't be smaller than 11`)
    }

    const teamStyle = {
        border: '2px solid purple',
        padding: '15px',
        margin: '15lpx',
        borderRadius: '8px',
    }

    return(
        <div style={teamStyle}>
            <h3>Player: {teamCount}</h3>

            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}