// const ele = document.createElement("h1");
// ele.innerHTML = "Hello from js!";

// const root = document.getElementById("root");
// root.appendChild(ele);


const parent = React.createElement("div",{id:"parent"},React.createElement(
    "div",{id:"child"},React.createElement("h1",{style:{color : "green"}},"Hello mitro!")));

const ele = React.createElement("h1",{},"Hello from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);