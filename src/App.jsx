
import './App.css'
import Team from './Team.jsx';
import Counter from './Counter.jsx';
import Student from './Student.jsx';
import Friend from './Friend.jsx';


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

      <Friend name="Sayem Bhuiyan" age= '21' cgpa="3.92" roll="465508" />
      <Friend name="Fahim Sarker" age="21" />
      <Friend name="Akash Islam" age= '21' roll="465489" cgpa='3.91' />
      <Friend name='Shajib Sarker' age='22' roll='465496' />
      <Friend name='Tipu Ahsan' age='23' roll= '465495' />

      
    </>
  )
}

export default App
