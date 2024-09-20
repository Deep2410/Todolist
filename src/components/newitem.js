import React, {Component} from 'react'

class NewItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputvalue : '',
            description: ''
        }
        this.inputvaluefunction = this.inputvaluefunction.bind(this);
        this.sendvalue = this.sendvalue.bind(this);
    }

    inputvaluefunction = (event) =>{
        const value = event.target.value;
        // this.props.method_value_change(value);
        this.setState({
            inputvalue: value
        })
    }

    handledescription = (event) => {
        const value = event.target.value;
        this.setState({
            description: value
        })
    }

    sendvalue = () =>{
        this.props.method_value_change(this.state.inputvalue, this.state.description)
    }

    render(){
        return(
            <div className='container mt-5'>
                <h1>Todo List Application in React</h1>

                <form>
                    <div class="mb-3">
                        
                        <input
                            type="text"
                            className="form-control mt-5"
                            name="newitem"
                            id="newitem"
                            aria-describedby="helpId"
                            placeholder="Enter name of Activity"
                            onChange={this.inputvaluefunction}
                        />

                        <input
                        className='form-control mt-2'
                        name = 'description'
                        id='description'
                        aria-describedby="helpId"
                        placeholder="Enter description for the activity"
                        onChange={this.handledescription}
                        />
                        
                    </div>

                    <button onClick={this.sendvalue} type='button' className='btn btn-primary mb-5'>Add Activity</button>
                    
                </form>
            </div>
        )
    }
}

export default NewItem