import React, { useState } from "react";
import Map from "./Map";
import { Layers, TileLayer, VectorLayer } from "./Layers";
import { Style, Icon } from "ol/style";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { osm, vector } from "./Source";
import { fromLonLat, get } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";
import FeatureStyles from "./Features/Styles";
import { MapList } from "./SidePan";
import LayerControl from "./Controls/LayerControl";
import AppContext from "./AppContext";
import hotSpots3857 from "./hotSpots3857.json"
import grez_burnt from "./grez_burnt.json"

import {Vector as VectorSource} from 'ol/source'; 


import mapConfig from "./config.json";
import "./App.css";




// const s1=vector({features: new GeoJSON().readFeatures(mapConfig.geojsonObject, {
//   featureProjection: get("EPSG:3857"),}),})



const s1=vector({features: new GeoJSON().readFeatures(hotSpots3857, {
    featureProjection: get("EPSG:3857"),}),})

const s2=vector({features: new GeoJSON().readFeatures(grez_burnt, {
  featureProjection: get("EPSG:3857"),}),})





const layersDef=[
  {id: 1, name: ' hotSpots ', src: s1, type: 'vector',style: FeatureStyles.Point, isvisible: true},
  {id: 2, name: ' burntAreas', src: s2, type: 'vector',style: FeatureStyles.MultiPolygon, isvisible: false},  
]
 


const App = () => {
  const [center, setCenter] = useState(mapConfig.center);
  const [zoom, setZoom] = useState(10);

  const [LList, setLList] = useState(layersDef); 
  

  return (
    <div>       
      <AppContext.Provider value={{ LList, setLList}}>

      <Map center={fromLonLat(center)} zoom={zoom}> 
        {/* <Layers llist={LList}/>  */}
        <Layers/> 
        <LayerControl llist={LList}/>    
          
        {/* {MapList(lst, 'leftTopMenu')} */}
      </Map> 
      </AppContext.Provider>
    </div>
  );
};





/*
const App = () => {
  const [center, setCenter] = useState(mapConfig.center);
  const [zoom, setZoom] = useState(9);

  const [showLayer1, setShowLayer1] = useState(true);
  const [showLayer2, setShowLayer2] = useState(false);
  const [showKvartals, setShowKvartals] = useState(false);
  const [features, setFeatures] = useState(addMarkers(markersLonLat));




  return (
    <div>
      
      <Map center={fromLonLat(center)} zoom={zoom}>        
      
        <Layers>
        
          <TileLayer source={osm()} zIndex={0} />
          {showLayer1 && (
            <VectorLayer              
              source={vector({
                features: new GeoJSON().readFeatures(geojsonObject, {
                  featureProjection: get("EPSG:3857"),
                }),
              })}
              style={FeatureStyles.MultiPolygon}
            />
          )}

          {showLayer2 && (
            <VectorLayer              
              source={vector({
                features: new GeoJSON().readFeatures(geojsonObject2, {
                  featureProjection: get("EPSG:3857"),
                }),
              })}
              style={FeatureStyles.MultiPolygon}
            />
          )}
          //{map.getLayersByName('ltwo')[0].setVisibility(false)}
          {showKvartals && <VectorLayer source={vector({ features })} />}
        </Layers>
        <Controls>
          <FullScreenControl />
        </Controls>
        {MapList(lst, 'leftTopMenu')}
      </Map> 
      <div>
        <input
          type="checkbox"
          checked={showLayer1}
          onChange={(event) => setShowLayer1(event.target.checked)}
          // onChange={(event) => console.log(event.target.checked)}
          // onChange={(event) => setShowLayer1(showLayer1 ? !showLayer1 : true)}
        />{" "}
        Johnson County
      </div>
      <div>
        <input
          type="checkbox"
          checked={showLayer2}
          onChange={(event) => setShowLayer2(event.target.checked)}
        />{" "}
        Wyandotte County
      </div>
      <hr />
      <div>
        <input
          type="checkbox"
          checked={showKvartals}
          onChange={(event) => setShowKvartals(event.target.checked)}
        />{" "}
        Show markers
      </div>
    </div>
  );
};
*/

export default App;
