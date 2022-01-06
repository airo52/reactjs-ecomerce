import React from 'react';

const Options = ({option})=>{

    return(
        option.map((item,index)=><option key={index} value={item.id}>{item.name}</option>
        )
    )
}
export default Options;