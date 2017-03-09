import React from 'react';
import Camper from './camper';

const CamperList = (props)=>{
    
    const campers = props.campers.viewData.map( function (obj,index){
        return <Camper key={index} index={index+1}  camper = {obj}  /> 
    });
    
    return (
        <div >
            {campers}
        </div>
    );
};

export default CamperList;