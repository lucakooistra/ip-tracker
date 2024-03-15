import { useEffect } from "react";
import { LatLngExpression } from "leaflet";
import { Marker, Popup, useMap, MapContainer, TileLayer } from "react-leaflet";

type MapTileProps = {
  latData?: number;
  lngData?: number;
};

type positionProp = {
  position: number[];
};

const RecenterAutomatically = ({ position }: positionProp) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo(position as LatLngExpression);
    }
  }, [map, position]);
  return null;
};


export function MapTile({ latData, lngData }: MapTileProps) {
  let position = [37.8910825, 41.1229977,14];
  if (latData && lngData) position = [latData, lngData];

  return (
    <>
      <MapContainer
        center={position as LatLngExpression}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position as LatLngExpression}>
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

