import propTypes from 'prop-types'

function Friend({name, age, cgpa, roll}){
    return(
        <div style={{
            border: '2px solid red',
            margin: '20px',
            padding: '20px',
            borderRadius: '10px',
        }}>
            <li style={{
                marginBottom:'10px'
            }}>Name: {name}, Age: {age}, Roll: {roll}, CGPA: {cgpa}</li>
        </div>
    );
}
Friend.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    roll: propTypes.number,
    cgpa: propTypes.number
}
Friend.defaultProps = {
    name: 'Unknonwn', 
    age: 'null',
    roll: 'none',
    cgpa: 'null',
}
export default Friend;