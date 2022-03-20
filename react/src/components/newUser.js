import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from '../axios'
class NewUser extends Component {
    state = {
        selectedUser: {
            id: null,
            name: null,
            date: null,

        },
    }







    editUserHandler = (song) => {
        debugger;
        axios.put('/puts', song).then(x => {
            // this.props.editSong(x.data)
        })


    };
    inputChange = (event) => {
        debugger;
        const newuser = { ...this.state.selectedUser };
        const id = event.target.id;
        newuser[id] = event.target.value;
        //const songChange=newuser[event.target.id];
        //songChange=event.target.value;
        // newuser[event.target.id]=songChange;

        this.setState({ selectedUser: newuser });
    }




    render() {
        let son = <p style={{ 'textAlign': 'center' }}>Please select a Song!</p>;
        if (this.props.id)
            son = <p style={{ 'textAlign': 'center' }}>loading .............!</p>;
        if (this.state.selectedUser.id)
            son = (
                <div className="edit">
                    <form>
                        <label>שם</label>
                        <input className="inputs" id="name" type="text" defaultValue={this.state.selectedUser.name} onChange={(event) => this.inputChange(event)} />
                        <label >זמר</label>
                        <input className="inputs" id="USername" type="text" defaultValue={this.state.selectedUser.USername} onChange={(event) => this.inputChange(event)} />
                        <label>נוצר בשנת</label>
                        <input className="inputs" id="year" type="text" defaultValue={this.state.selectedUser.year} onChange={(event) => this.inputChange(event)} />

                        <button className="btn" onClick={() => this.editSongHandler(this.state.selectedUser)} >שמירה</button>
                        <button className="btn">ביטול</button>
                    </form>
                </div>
            );
        return son;
    }

}
export default NewUser;
// const mapStateToProps=state=>{
//   return{songses: state.songs};
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         editSong: (value) => dispatch({ type: 'EDIT' ,value:value}),
//     }}
// export default connect(mapStateToProps,mapDispatchToProps)(newuser)