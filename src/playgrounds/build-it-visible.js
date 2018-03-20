class VisibiltyToggle extends React.Component {

    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility : false
        };
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return{
            visibility: !prevState.visibility
            };
        });
    }

    render(){
        return(
            <div>
            <h1>Visbility Toggle Example</h1>
            <button onClick = {this.handleToggleVisibility}>
            {this.state.visibility ? "Hide Details" : "Show details"}
            </button>
            {this.state.visibility && (
                <div>
                <p>Showing some details</p>
                </div>
            )
            }
            </div>
        );
    }

}

ReactDOM.render(<VisibiltyToggle /> , document.getElementById('app'));



// const app = {
//     title: "Visibilty Toggle!",
//     text: "Show items here when the button is clicked"
// }

// let btnVisibility = false;

// const onShowButton = (e) => {

//     btnVisibility = !btnVisibility;
//     renderApp();

// };

// const renderApp = () =>{

//     const template = (

//         <div>
//             <h1>{app.title}</h1>
//             <button onClick = {onShowButton}>
//             {btnVisibility ? 'Hide Details' : 'Show details'}
//             </button>
//             {btnVisibility && (
//                 <div>
//                 <p>{app.text}</p>
//                 </div>
//             )}
//         </div>
//     )
//     ReactDOM.render(template , document.getElementById('app'));
// };

// renderApp();