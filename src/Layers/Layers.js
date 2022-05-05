import React from "react";
import VectorLayer from "./VectorLayer";
import TileLayer from "./TileLayer";
import { osm } from "../Source";
import AppContext from "../AppContext";
import { useContext } from "react";



// const Layers = ({ children }) => {
// 	return <div>{children}</div>;
// };


// const Layers = ({llist}) => {
const Layers = () => {
	const {LList} =useContext(AppContext);
	let lrs=LList.map((item, i) => (item.isvisible && <VectorLayer source={item.src} style={item.style}/>))	

	return <div>
		<TileLayer source={osm()} zIndex={0} />
		{lrs}
		</div>;	
};

export default Layers;