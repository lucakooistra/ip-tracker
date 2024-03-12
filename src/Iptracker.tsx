import { useState,  ChangeEvent, FormEvent } from "react";
import "./iptracker.scss";
import { MapTile } from "./components/MapTile";
import { IpForm } from "./components/ipform/IpForm";
import queryString from "query-string";

// type IptrackerProps = {

// }

function Iptracker() {
  const [data, setData] = useState(null);
  const [ipAdressInput, setIpAdressInput] = useState("");
  const url = queryString.stringifyUrl({
    url: "https://geo.ipify.org/api/v2/country,city",
    query: {
      apiKey: "at_gwoGhWGCqBr8iCsX4zoW9fYSL6kIm",
      ipAdress: ipAdressInput ,
    },
  });
  console.log(url);


  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setIpAdressInput(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    fetch(url)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error));
  }

  return (
    <div className="iptracker">
      <div className="iptracker__background">
        <div className="iptracker__container">
          <h1 className="iptracker__title">IP Address Tracker</h1>
          <IpForm
            type="text"
            value={ipAdressInput}
            name="ipform"
            placeholder="Search for any IP address or domain"
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
      <MapTile />;
      {data ? <pre>{JSON.stringify(console.log(data))}</pre> : "Loading..."}
    </div>
  );
}

export default Iptracker;
