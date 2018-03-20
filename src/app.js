class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer!';
        const options = ['Thing one', 'Thing two', 'Thing three'];
        return (
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action />
            <Options options={options}/>
            <AddOption />
            </div>
        );
    }
}


class Header extends React.Component {

    render(){

        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            </div>
        );
    };
};

class Action extends React.Component{
    handlePick(){
        alert('handlepick');
    }
    render(){
        return (
            <div>
            <button onClick={this.handlePick}>What should i do?</button>
            </div>
        );
    };
}

class Options extends React.Component{
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll(){
        alert('removed all the options.');
    }

    render(){
       
        return(
            <div>
            {
                this.props.options.map((option) => <Option key={option} optionText={option}/>)
            }
            <button onClick={this.handleRemoveAll}>Remove All</button>
            </div>
        );
    };
}

class Option extends React.Component{
    render(){
        return (
         <div>
         <p>{this.props.optionText}</p>
         </div>
        );
    };
}

class AddOption extends React.Component{
    handleAddOption(e){

        e.preventDefault();
        const optionInput = e.target.elements.inputOption.value.trim();
        // console.log(optionInput);

        if(optionInput){
            alert('onSubmit');
            // e.target.elements.optionInput.value = '';
        }
    }
    render(){
        return(
            <div>
            <form  onSubmit = {this.handleAddOption}>
            <input type='text' name='inputOption'></input>
            <button>Add Option</button>
            </form>
            </div>

        );
    }
}

ReactDOM.render(<IndecisionApp /> , document.getElementById('app'));
