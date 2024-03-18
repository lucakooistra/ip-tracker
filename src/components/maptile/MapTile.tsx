import { useEffect } from "react";
import { LatLng } from "leaflet";
import { Marker, Popup, useMap, MapContainer, TileLayer } from "react-leaflet";

type MapTileProps = {
  latData?: number;
  lngData?: number;
};

type positionProp = {
  position: LatLng;
};

export function MapTile({ latData, lngData }: MapTileProps) {
  let position = new LatLng(37.8910825, 41.1229977, 14);
  if (latData && lngData) position = new LatLng(latData, lngData);

  const RecenterAutomatically = ({ position }: positionProp) => {
    const map = useMap();
    useEffect(() => {
      if (position) {
        map.flyTo(position);
      }
    }, [map, position]);
    return null;
  };

  return (
    <>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <RecenterAutomatically position={position} />
      </MapContainer>
      ,
    </>
  );
}
