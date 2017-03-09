import React from 'react';

const Camper = (props) => {
    return (
        
        <div className='row'>
            <div className='number'>{props.index}</div>
            <div className='oneThird name'>
                <img src ={props.camper.img} target="_blank"/>
                <a href={"https://www.freecodecamp.com/"+props.camper.username}>{props.camper.username}</a>
            </div>
            <div className='oneThird'>{props.camper.recent}</div>
            <div className='oneThird'>{props.camper.alltime}</div>
         </div>
    );

}
export default Camper;