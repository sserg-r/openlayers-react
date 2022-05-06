import React from "react";
import VectorLayer from "./VectorLayer";
import TileLayer from "./TileLayer";
import { osm } from "../Source";
import AppContext from "../AppContext";
import { useContext } from "react";

import GeoJSON from 'ol/format/GeoJSON';  
import {Vector as VectorSource} from 'ol/source'; 
import kvartals3857 from "../kvartals3857.json"; 
import {Fill, Stroke, Style, Text} from 'ol/style'; 
import get from 'ol/Feature'

const kvartalSource = new VectorSource({
	features: new GeoJSON().readFeatures(kvartals3857),
  });  
const kvartalStyle=new Style({ 
    stroke: new Stroke({
    color: 'grey',
    width: 1
  }),
})

const kvStyle= function(feature){
	return new Style({ 
		stroke: new Stroke({
		color: 'grey',
		width: 1
	  }),
	  text: new Text({
			font: '8px Calibri, san-serif',
			text: feature.get('name')
		}), 
	})
}
	


// const Layers = ({ children }) => {
// 	return <div>{children}</div>;
// };


// const Layers = ({llist}) => {
const Layers = () => {
	const {LList} =useContext(AppContext);
	let lrs=LList.map((item, i) => (item.isvisible && <VectorLayer source={item.src} style={item.style}/>))	

	return <div>
		<TileLayer source={osm()} zIndex={0} />
		{/* <VectorLayer source={kvartalSource} style={kvartalStyle}/> */}
		<VectorLayer source={kvartalSource} style={kvStyle}/>
		{lrs}
		</div>;	
};

export default Layers;