const element1 = React.createElement("h1",{className:"element",id:"first", style: {color: "red"}},"Hello World");
const element2 = React.createElement("h2",{className:"element",id:"second"},"Hello World 2");
const root = document.getElementById("root");
ReactDOM.render([element1, element2], root);
