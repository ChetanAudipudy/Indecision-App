class IndecisionApp extends React.Component{

    constructor(props){
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ['thing one' , 'thing two', 'thing three']
        }
    }

    handleDeleteOptions(){
        this.setState(() => {
            return{
                options: []
            }
        })
        
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option)
      
    }

    handleAddOption(e) {
        e.preventDefault();
        this.setState((prevState) => {
            return(
                alert('add option clicked!!!!')
            )
            
        })
    }

    render(){
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer!';
        return (
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action 
                hasOptions={this.state.options.length > 0} 
                handlePick = {this.handlePick}    
            />
            <Options 
                options={this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}    
            />
            <AddOption handleAddOption={this.handleAddOption}/>
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

    render(){
        return (
            <div>
            <button 
            onClick={this.props.handlePick}
            disabled={!this.props.hasOptions}
            >What should i do?</button>
            </div>
        );
    };
}

class Options extends React.Component{

    render(){
        return(
            <div>
            {
                this.props.options.map((option) => <Option key={option} optionText={option}/>)
            }
            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
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
  
    render(){
        return(
            <div>
            <form  onSubmit = {this.props.handleAddOption}>
            <input type='text' name='inputOption'></input>
            <button>Add Option</button>
            </form>
            </div>

        );

    }
}

ReactDOM.render(<IndecisionApp /> , document.getElementById('app'));
