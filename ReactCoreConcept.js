// Basic React Explaination
// creating an element is a core React function hence it is in the React Library
const heading = React.createElement("h1", {}, "Hello World using React");

// adding the element into DOM which requires a root these  are core ReactDOM function hence these are in the ReactDOM Library
// we have created the root for our ReactDom to manipulate the major portion of our DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
// to render our created element 


/*
 <div id="parent">
    <div id="child">
        <h1>I am harshiv</h1>
        <h2>thakkar</h2>
    </div>
 </div>
*/

const parent = React.createElement("div",
    {
        id: "parent"
    },
    React.createElement("div", {
        id: "child"
    },
        [
            React.createElement("h1", {}, "i am harshiv"),
            React.createElement("h2", {}, "thakkar")
        ])
)

root.render(parent);