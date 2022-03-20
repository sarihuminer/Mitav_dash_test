import React,{Component} from 'react'

class Song extends Component{



    
    render(){
        return(
          
            <div className="song" onClick={this.props.clicked}>
                <label>שם שיר</label>
                 <p>{this.props.name}</p>
                <label>שנת המצאה</label>
                 <p>{this.props.year}</p> 
                <label>שם זמר</label>
                <p>{this.props.USername}</p> 
            </div>
        );
    }


}export default Song;