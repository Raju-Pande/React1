
// Props: props simllar to  Argument in function 
// props can be pass "parent" ---> to "child"


// import Student from "./Student";

// function App() {
//   return (
//    <>
//    <h1>Movie App</h1>
//   <Student name="Raj" marks={80}/>
//   <Student name="Sandip" marks={100}/>
//   <Student  />
  
//    </>
//   );
// }

// Student.defaultProps={
//   name:"Student",
//   marks:"N.A"
// }


// export default App;

// fff

import MovieList from "./MovieList";

function App() {
  return (
   <>
   <h1 className="appname">Movie App</h1>
  
   <MovieList/>
   </>
  );
}

export default App;