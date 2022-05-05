import React from "react";


const LayerControl = ({llist}) => {	
	const lrs=llist.map((item, i) => (
        <li key={i}>
         <input type='checkbox'
            checked={true} 
            onChange={() => console.log('changed')}/>
            {item.name} 
            </li>             
        
        ))
        
	return <ul>        
            {lrs}
        	
		</ul>;	
};

export default LayerControl;