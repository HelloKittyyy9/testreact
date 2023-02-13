import { useState } from "react";

function App() {
  var [like, addlikee] = useState(26)
  var [comm, addcomm] = useState('Nikita')
  var [cute, addcute] = useState(-50)
  var [test1, addtest] = useState("My mark is: ")
  var [test2, addtest2] = useState(5)
  function addlike() {
    addlikee(like += 1)
  }
  return ( <div>
 
    <h2>{comm}</h2>
    <input type="text"
       value = {comm}
       onChange ={event => addcomm(event.target.value)}
       />
    <h1>Cute: {cute}</h1>
    <input type="number"
       value = {cute}
       onChange ={event => addcute(event.target.value)} />
    <h1> Likes: {like}</h1>
    <button onClick={addlike}>Like him!</button>
    <br></br>
    <input type="checkbox" id="scales" name="scales"/>
      <label for="scales">1</label>
      <input type="checkbox" id="scales" name="scales"/>
      <label for="scales">2</label>
      <input type="checkbox" id="scales" name="scales"/>
      <label for="scales">3</label>
      <input type="checkbox" id="scales" name="scales"/>
      <label for="scales">4</label>
      <input type="checkbox" id="scales" name="scales" checked/>
      <label for="scales">5</label>
      <br></br>
      <h3>{test1}{test2}, please ;-; </h3>
    </div>
  );
}

export default App;
