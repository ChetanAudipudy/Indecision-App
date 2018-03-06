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

const user = {

    name : 'Chetan Audipudy',
    age : 26,
    location : 'Chicago'
};

function getLocation(location){
    if (location){
        return <p>Location : {location}</p>
    }
}
const getFirstName = (name) => name.split(" ")[0];
console.log(getFirstName(user.name));

const templateTwo =(
        <div>
        <h1>{user.name}</h1>
        <p>Age : {user.age}</p>
        {getLocation(user.location)}
        </div>

);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo , appRoot);