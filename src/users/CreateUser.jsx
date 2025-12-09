import { Component } from "react";


export class CreateUser extends Component {
    initialState = {
        name: " ",
        age:" "
    }
    state = this.initialState;

    formUser = (e) => {
        const {name,value} = e.target;
        this.setState({
            [name]:value,
        })
        console.log(this.state);

    }

    addUser=()=> {
        this.props.addUser(this.state);
        this.setState(this.initialState);

    }

    render(){
        const {name, age} = this.state;
        return(
            <form >
                <h1>Add User</h1>
                <div>
                <label htmlFor="job">Name</label>
                <input 
                className="form-control" placeholder="Enter Name"
                type="text"
                name="name"
                id="name" 
                value={name} 
                onChange={this.formUser}
                />
                </div>

                <div>
                <label htmlFor="job">Age</label>
                <input 
                className="form-control" placeholder="Enter Age"
                type="text"
                name="age"
                id="age" 
                value={age} 
                onChange={this.formUser}
                />
                </div>
                <button className="btn btn-primary" type="button" value="Submit" onClick={this.addUser}>Submit</button>
            </form>

        )
    }
}