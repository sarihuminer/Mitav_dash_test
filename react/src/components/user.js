import React, { Component } from 'react'

class User extends Component {
    render() {
        return (

            <div className="song" >
                <label>תז</label>
                <p>{this.props.id}</p>
                <label>שם מלא</label>
                <p>{this.props.full_Name}</p>
                <label>תאריך לידה</label>
                <p>{this.props.birth_Date}</p>
            </div>
        );
    }


} export default User;