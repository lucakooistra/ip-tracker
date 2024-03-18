import { useState, ChangeEvent, FormEvent } from "react";
import "./iptracker.scss";
import { MapTile } from "./components/maptile/MapTile";
import { IpForm } from "./components/ipform/IpForm";
import { InformationCards } from "./components/informationCards/InformationCards";
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
      domain: ipAddressInput,
    },
  });

  const latData = data?.location.lat;
  const lngData = data?.location.lng;
  const ipAddressData = data?.ip;

  const locationCityData = data?.location.city;
  const locationRegionData = data?.location.region;
  const locationPostalCodeData = data?.location.postalCode;
  const timezoneData = data?.location.timezone;
  const nameData = data?.as.name;

  function makeALocationString() {
    if (locationCityData && locationRegionData && locationPostalCodeData) {
      return (
        // `${locationCityData}, `
        locationCityData +
        ", " +
        locationRegionData +
        ", " +
        locationPostalCodeData
      );
    } else if (locationCityData && locationRegionData) {
      return locationCityData + ", " + locationRegionData;
    } else {
      return "search for a location";
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setIpAddressInput(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    fetch(url)
      .then((response) => response.json())
      .then((json) => {if (json.code > 400) {console.log('escaped')} else {setData(json)}})
      .catch((error) => console.error(error));
    setIpAddressInput("");
  }
  return (
    <div className="iptracker">
      <div className="iptracker__background">
        <div className="iptracker__container">
          <div className="iptracker__holder">
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
        <InformationCards
          ipAddressData={ipAddressData}
          locationTotalData={makeALocationString()}
          timezoneData={timezoneData}
          nameData={nameData}
        />
        </div>
      </div>
      <MapTile latData={latData} lngData={lngData} />;
    </div>
  );
}

export default Iptracker;
