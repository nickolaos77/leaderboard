import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux'
import ReactRedux from 'react-redux';
import CamperList from "./camper_list"
//redux

//react
class App extends React.Component{
  constructor(props) {
   super(props);
      this.state = {thirtyDays:[], hundredDays:[], 
                    viewData :[], active:"selection1"} ;
      
      fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then ( response =>               response.json() ).then( data =>{
            this.setState({thirtyDays:data, viewData:data})
        }) 
      
      fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime').then ( response=>
        response.json() ).then( data=>{
            this.setState({hundredDays:data})    
        })    
      
      this.dataToggler = this.dataToggler.bind(this);    
  }

dataToggler(id){
    console.log(id);
    if (this.state.active === "selection1" && id==2) {
        this.setState({thirtyDays:this.state.thirtyDays, hundredDays:this.state.hundredDays, viewData:this.state.hundredDays, active:'selection2'})
    }
    
    if (this.state.active === "selection2" && id==1) {
        this.setState({thirtyDays:this.state.thirtyDays, hundredDays:this.state.hundredDays, viewData:this.state.thirtyDays, active:'selection1'})
    }
    
} 
    

 render() {
 
     return (
       <div>
            <div className='row color'>
                <div className='number'>#</div>
                <div className='oneThird wide'>Camper Name</div>
                {/* Render conditionally component */}
                
                { this.state.active==="selection2" && 
                <div className='oneThird' style={{color: "blue", textDecoration : "underline"}} onClick = {()=>this.dataToggler(1)}>Points In Past 30 days (sort&#x21e9;)</div>
                }
                
                { this.state.active==="selection1" && 
                <div className='oneThird' >Points In Past 30 days</div>
                }                
                
                { this.state.active==="selection1" &&
                <div className='oneThird' style={{color: "blue", textDecoration : "underline"}} onClick = {()=>this.dataToggler(2)}>All time points(sort&#x21e9;)</div>
                }
                
                { this.state.active==="selection2" &&
                <div className='oneThird'>All time points</div>
                }
                
            </div>
             {/* Render conditionally component */}
             { this.state.thirtyDays.length > 0 && <CamperList campers={this.state}/>}
       </div>
   );

 }
};

ReactDOM.render(<App/>, document.getElementById('app'));
