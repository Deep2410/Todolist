import React, {Component} from 'react'

class SingleItem extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='container'>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{this.props.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted "></h6>
                    <p class="card-text">{}</p>
                    <div className='container'>
                        <button onClick={() => this.props.deleteItem(this.props.name)} className='btn btn-danger'>Delete</button>
                        <button className='btn btn-primary'>Edit</button>
                        <button onClick={() => this.props.completedItem(this.props.name)} className='btn btn-success'>Mark as done</button>
                    </div>
                    
                  </div>
                </div>
            </div>
        )
    }
}

export default SingleItem