import React from "react";
import AppContext from "../AppContext";
import { useContext } from "react";


const LayerControl = ({llist}) => {	
    const {LList, setLList} =useContext(AppContext);


    const changeVisib = (i) => {
        let arr=[...LList]
        arr[i].isvisible=!arr[i].isvisible;               
        setLList(arr)       
    }
    
    var lrs=LList.map(function(item, i){ 
        let rr=i;
        return  <li key={i}>
            <input type='checkbox' 
                    checked={item.isvisible} 
                    onChange={() => changeVisib(rr)}                
                    />            
            {item.name}
        </li>})            


	// const lrs=LList.map((item, i) => (
    //     <li key={i}>
    //      <input type='checkbox'
    //         checked={true} 
    //         onChange={() => console.log('changed')}/>
    //         {item.name} 
    //         </li>             
        // 
        // ))
        
	return <ul>        
            {lrs}
        	
		</ul>;	
};

export default LayerControl;