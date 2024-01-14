
import './App.css'
import Team from './Team.jsx';
import Counter from './Counter.jsx';
import Student from './Student.jsx';
import Friend from './Friend.jsx';
import User from './User.jsx';


function App() {

  const handleClick = () => {
    const countElement = document.getElementById('counter');
    const countText = countElement.innerHTML;
    let previousValue = parseInt(countText)
    previousValue = previousValue + 1;
    countElement.innerHTML = previousValue;
  }

  const handleClick2 = () => {
    const countElement = document.getElementById('counter');
    const countText = countElement.innerHTML;
    let previousValue = parseInt(countText)
    
    if(previousValue <= 0){
      return alert('No Negative Value');
    }
    previousValue = previousValue - 1;

    countElement.innerHTML = previousValue;
  }
  return (
    <>
      
      <h3>React Core Concept Part 2</h3>

      <User />

      <Student />

      <Team /> 

      <div>
        <h2>Count: <span id='counter'>1</span></h2>
      </div>

      <button onClick={handleClick} style={{
        marginRight: '20px'
      }}>
        Increase
      </button>

      <button onClick={handleClick2}>Decrease</button>


      <Counter />
      
    </>
  )
}

export default App
