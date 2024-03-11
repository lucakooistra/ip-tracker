import {useState} from "react";
import { LatLng } from "leaflet";
import { MapContainer, useMapEvents, TileLayer, Marker, Popup } from "react-leaflet";

export function MapTile() {
    function LocationMarker() {
        const [position, setPosition] = useState<LatLng | null>(null);
        const map = useMapEvents({
          click() {
            map.locate();
          },
          locationfound(e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
          },
        });
    
        return position === null ? null : (
          <Marker position={position}>
            <Popup>You are here</Popup>
          </Marker>
        );
      }
      
      return (
        <div className="iptracker">
          <MapContainer
            center={{ lat: 37.899431, lng: 41.12082 }}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
          </MapContainer>
          ,
        </div>
      );
}