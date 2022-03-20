import React, { componnet, Component } from 'react'
import User from './user'
import axios from '../axios'
import Edit from './newUser'
import { connect } from 'react-redux'
class Users extends Component {

    state = {

        users: []
    }
    constructor() {
        debugger
        super();
        axios.get('/').then(x => {
            this.setState({ users: x.data })
        })
    }

    componentDidMount() {
        debugger;
        console.log(this.props.users);
        // if (this.props.users == 0) {
        axios.get('/').then(x => {
            this.setState({ users: x.data })
        })

        // }

    };



    render() {
        let ulist = null;
        if (this.state.users) {
            ulist = this.state.users.map(u => {
                return <User full_Name={u.full_Name} key={u.id} id={u.iD_Num} birth_Date={u.birth_Date} ></User>
            });
        }


        return (
            <div>
                <h1 id="listH1">המשתמשים:</h1>
                <button className="btn">הוסף</button>
                <br />
                {ulist}
            </div>
        );

    }

}

export default Users