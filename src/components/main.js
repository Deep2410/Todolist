import React, {Component} from 'react';
import NewItem from './newitem';
import SingleItem from './singleitem';

class Main extends Component{
    constructor(props){
        super(props)

        this.state = {
            child: [],
            complete: [],
            description: []
        }
        this.handlevaluechange = this.handlevaluechange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handlecomplete = this.handlecomplete.bind(this);
    }

    handlevaluechange = (value, description) =>{
        this.setState((prevState) => {
            if(prevState.child.some(item => item === value)){
                return null;
            }
            else{
                return{
                    child: [...prevState.child, value],
                    description: [...prevState.description, description]
                }
            }
        })
    }

    handleDelete = (value) => {
        this.setState((prevState) =>{
            if(prevState.child.some(item => item === value)){
                return{
                    child: prevState.child.filter(item => item !== value)
                }
            }
            else{
                return(null);
            }
        })
    }

    handlecomplete = (value) =>{
        this.setState((prevState) =>{
            if(prevState.child.some(item => item === value)){
                return{
                    child: prevState.child.filter(item => item !== value),
                    complete: [...prevState.complete, value]
                }
            }

            else{
                return null;
            }
        });
    };

    

    render(){
        return(
            <div>
                <NewItem method_value_change = {this.handlevaluechange} />
                <h2 className='mt-5 mb-5'>List of Activities</h2>
                {
                    this.state.child.map((item, index) => (
                        <SingleItem key={index} name={item} deleteItem = {this.handleDelete} completedItem = {this.handlecomplete} />
                    ))
                }         
                <h2 className='mt-5 mb-5'>List of Completed Activities</h2>
                {
                    this.state.complete.map((item,index) => (
                        <SingleItem key={index} name={item} deleteItem = {this.handleDelete} completedItem = {this.handlecomplete} />
                    ))
                }      
                
            </div>
        )
    }
}

export default Main;