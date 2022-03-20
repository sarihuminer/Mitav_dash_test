import React,{ Component} from 'react'
import { connect } from 'react-redux'
import axios from '../axios'
class NewSong extends Component{
state={
selectedSong:{
    id:null,
    name:null,
    USername:null,
    year:null,
    imgSrc:null,
},
}

componentDidUpdate(){
   
    if(this.props.id)
    if(!this.state.selectedSong||(this.state.selectedSong&&this.state.selectedSong.id!==this.props.id)){
    let songs=this.props.songses.filter(s=>s.id===this.props.id)[0];
    console.log(songs)
    let mysong={...this.state.selectedSong} 
     mysong.USername=songs.USername;
     mysong.id=songs.id;
     mysong.name=songs.name;
     mysong.year=songs.year;
     console.log(mysong)
     this.setState({selectedSong:mysong})
    
    console.log(this.state.selectedSong)
    //this.setState({selectedSong:this.props.songses.filter(s=>s.id===this.props.id)})
   // console.log(this.state.selectedSong)
   }
}




editSongHandler=(song)=>{
    debugger;
    axios.put('/puts',song).then(x=>{
         this.props.editSong(x.data)
        })
          
        
     };
     inputChange=(event)=>{
         debugger;
        const newsong={...this.state.selectedSong};
        const id=event.target.id;
        newsong[id]=event.target.value;
        //const songChange=newsong[event.target.id];
        //songChange=event.target.value;
       // newsong[event.target.id]=songChange;

this.setState({selectedSong:newsong});
    }




render(){
    let son = <p style={{ 'textAlign': 'center' }}>Please select a Song!</p>;
    if(this.props.id)
     son = <p style={{ 'textAlign': 'center' }}>loading .............!</p>;
   if(this.state.selectedSong.id)
    son=(
        <div className="edit">
<form>
    <label>שם</label>
    <input className="inputs" id="name" type="text" defaultValue={this.state.selectedSong.name} onChange={(event)=>this.inputChange(event)}/>
    <label >זמר</label>
    <input className="inputs" id="USername" type="text" defaultValue={this.state.selectedSong.USername} onChange={(event)=>this.inputChange(event)}/>
    <label>נוצר בשנת</label>
    <input className="inputs" id="year" type="text" defaultValue={this.state.selectedSong.year} onChange={(event)=>this.inputChange(event)}/> 

    <button className="btn" onClick={()=>this.editSongHandler(this.state.selectedSong)} >שמירה</button>
    <button className="btn">ביטול</button>
</form>
        </div>
    );
    return son;
}

}
const mapStateToProps=state=>{
  return{songses: state.songs};
}
const mapDispatchToProps = dispatch => {
    return {
        editSong: (value) => dispatch({ type: 'EDIT' ,value:value}),
    }}
export default connect(mapStateToProps,mapDispatchToProps)(NewSong)