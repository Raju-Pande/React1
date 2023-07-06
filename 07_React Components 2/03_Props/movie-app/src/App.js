// props is a components.
// props are read-only and are "immutable"
// state: while states change asynchronously and is "mutable"
// props is passing one component to another component
// Props: props simllar to  Argument in function 
// props can be pass "parent" ---> to "child"


import Student from "./Student";

function App() {
  return (
   <>
   <h1>Movie App</h1> 
  <Student name="Raj" marks={80}/>
  <Student name="Sandip" marks={100}/>
  <Student name="Rahul" marks={85}/>
  
   </>
  );
}

export default App;
