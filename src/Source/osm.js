// import * as olSource from "ol/source";
import OlSourceOSM from "ol/source/OSM";

function osm() {
	var ggg=new OlSourceOSM();
	ggg.setUrl('https://tile.openstreetmap.de/{z}/{x}/{y}.png');
	
	return ggg;
}

export default osm;