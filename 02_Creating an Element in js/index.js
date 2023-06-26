// javaScript code 

// const heading=document.createElement("h2");
// heading.textContent="Inside javaScript code";
// heading.className="header";
// document.getElementById("root").append(heading)
// console.log("javaScript Element", heading);

// REACT

// const reactHeading =React.createElement("h1",{className:"head", id:"reactHead" },"Hello React!");

// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading)
// console.log("React Element",reactHeading);

// REACT PNG ADD

// const reactPng=React.createElement("img",{className:"png",src:"https://files.codingninjas.in/coding-ninjas-24647.png"});
// ReactDOM.createRoot(document.getElementById("root")).render(reactPng)

// REACT JSX(javaScript xml)

// const jsxHeading=(
//                      <div><h1> Welcome to JSX</h1>
//                      <p>here created a jsx</p></div>
//     );

// ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading)

// don't need to extra div inside root id then use the React


// const jsxHeading = (
//         <React.Fragment>
//         <h1> Welcome to JSX</h1>
//         <p>here created a jsx</p></React.Fragment>
// );

// ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading)

// here also write in React.Fragment

const jsxHeading = (
    <>
    <h1> Welcome to JSX</h1>
    <p>here created a jsx</p></>
);

ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading)