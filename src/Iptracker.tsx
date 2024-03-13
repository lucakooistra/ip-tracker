import { useState, ChangeEvent, FormEvent } from "react";
import "./iptracker.scss";
import { MapTile } from "./components/maptile/MapTile";
import { IpForm } from "./components/ipform/IpForm";
import queryString from "query-string";

type ApiDataResponse = {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
    geonameId: number;
  };
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
};

function Iptracker() {
  const [data, setData] = useState<ApiDataResponse | null>(null);
  const [ipAddressInput, setIpAddressInput] = useState("");
  const url = queryString.stringifyUrl({
    url: "https://geo.ipify.org/api/v2/country,city",
    query: {
      apiKey: "at_gwoGhWGCqBr8iCsX4zoW9fYSL6kIm",
      ipAddress: ipAddressInput,
    },
  });

  const latData = data?.location.lat;
  const lngData = data?.location.lng;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setIpAddressInput(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
    setIpAddressInput('');
  }
  return (
    <div className="iptracker">
      <div className="iptracker__background">
        <div className="iptracker__container">
          <h1 className="iptracker__title">IP Address Tracker</h1>
          <IpForm
            type="text"
            value={ipAddressInput}
            name="ipform"
            placeholder="Search for any IP address or domain"
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
      <MapTile 
        latData = {latData}
        lngData = {lngData}
      />;
      {data ? (
        <pre>{JSON.stringify(console.log(data))}</pre>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default Iptracker;
