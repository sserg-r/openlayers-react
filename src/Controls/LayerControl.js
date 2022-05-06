import React from "react";
import AppContext from "../AppContext";
import { useContext, useState } from "react";


const styles={
  li: {
    display: 'flex',
    minWidth: '25vh',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem',
    fontSize: 'calc(3px + 2vmin)',
    boxShadow: '10px 5px 5px black',    
    margin: '0.2em 0em 0.2em 0em',
  },
  div: {
    backgroundColor: '#707a7d',       
  }
}

function GetControls(a){
    return <div >
      <p>controll elements will be here</p>
      <input type="date" id="start" name="start date"></input>
      <input type="date" id="end" name="end date" value={Date().now}></input>
    </div>
  }


  function MapLayer ({item,r}) {
    const showLayer=item.isvisible;
    const [vis, setVis]=useState('none');
    const {LList, setLList} =useContext(AppContext);
    const rr=r;

    const changeVisib = (i) => {
      let arr=[...LList]
      arr[i].isvisible=!arr[i].isvisible;               
      setLList(arr)       
  } 
    return  <div> 
              <span>
                <input   type='checkbox'
                          checked={item.isvisible} 
                          onChange={() => changeVisib(rr)} />
                          {item.name}
              </span>  
              <button onClick={() => {
          setVis((vis==='none') ? 'block':'none' );          
        }          
          }>&#9776;</button>
            <div className='controlBox' style={{...styles.div, ...{display:vis}}}>
              <GetControls a={item} />
            </div>
          </div>      
  }
    
  
const LayerControl = () => {	
    const {LList, setLList} =useContext(AppContext);    
    
    
    
    var lrs=LList.map(function(item, i){
      var r=i; 
    return <li key={i}  style={styles.li}> 
      <MapLayer item={item} r={r}/>
    </li>    
    })
    return <div className="leftTopMenu">
    <ul>        
            {lrs}        	
          </ul>
          </div>;	

};
    
    
      
        
        // return (
        //     <li>  
        //       <span>
        //       <input 
        //         type='checkbox'
        //         checked={item.isvisible}
        //         onChange={() => changeVisib(rr)}             
              
        //       />
        //         {item.name}
        //     </span>      
        //       <button onClick={() => {
        //         setVis((vis==='none') ? 'block':'none' );          
        //       }          
        //         }>&#9776;</button>
        //       <div className='controlBox' style={{...styles.div, ...{display: vis}}}>
        //         <GetControls a={rr} />
        //       </div>
      
        //     </li>
        //   );
        // })
      
      











	// const lrs=LList.map((item, i) => (
    //     <li key={i}>
    //      <input type='checkbox'
    //         checked={true} 
    //         onChange={() => console.log('changed')}/>
    //         {item.name} 
    //         </li>             
        // 
        // ))
        
	

export default LayerControl;