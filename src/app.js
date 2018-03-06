const app = {
    title : "Indecision App",
    subtitle : "Put your life in the hands of a computer!",
    option : ["one" , "two"]
}


const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>Subtitle : {app.subtitle}</p> }
        {(app.option && app.option.length > 0) && <ol>
            <li>{app.option[0]}</li>
            <li>{app.option[1]}</li>
        </ol>}
    </div>
);

let count = 0;
const addOne = () => {
    count++;
    renderApp();
}

const minusOne = () => {
    count--;
    renderApp();
}
const reset = () => {
    count = 0;
    renderApp();
}

const renderApp = () => {
    
 const templateTwo =(
    <div>
    <h1>Count: {count}</h1>
    <button onClick = {addOne}>+1</button>
    <button onClick = {minusOne}>-1</button>
    <button onClick = {reset}>reset</button>
    </div>

 );
 ReactDOM.render(templateTwo , appRoot);
}

const appRoot = document.getElementById('app');

renderApp();