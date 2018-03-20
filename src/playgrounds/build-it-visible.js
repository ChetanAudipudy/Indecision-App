const app = {
    title: "Visibilty Toggle!",
    text: "Show items here when the button is clicked"
}

let btnVisibility = false;

const onShowButton = (e) => {

    btnVisibility = !btnVisibility;
    renderApp();

};

const renderApp = () =>{

    const template = (

        <div>
            <h1>{app.title}</h1>
            <button onClick = {onShowButton}>
            {btnVisibility ? 'Hide Details' : 'Show details'}
            </button>
            {btnVisibility && (
                <div>
                <p>{app.text}</p>
                </div>
            )}
        </div>
    )
    ReactDOM.render(template , document.getElementById('app'));
};

renderApp();