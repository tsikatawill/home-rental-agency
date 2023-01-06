import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer } from "react-leaflet";

import { ChangeView } from "./ChangeView";

const Map = ({ coordinates }) => {
  return (
    <MapContainer
      center={coordinates}
      zoom={10}
      scrollWheelZoom={false}
      placeholder={<p>Loading map</p>}
      style={{ height: "100%", width: "100%" }}
    >
      <ChangeView center={coordinates} zoom={10} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
