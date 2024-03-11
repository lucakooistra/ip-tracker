import { useState, useEffect, useId, FormEvent, ChangeEvent } from "react";
import "./iptracker.scss";
import { MapTile } from "./components/MapTile";
import { IpForm } from "./components/IpForm";
import queryString from "query-string";

// type IptrackerProps = {

// }

function Iptracker() {
  const [data, setData] = useState(null);
  const [ipAdressInput, setIpAdressInput] = useState('')
  const url = queryString.stringifyUrl({
    url: "https://geo.ipify.org/api/v2/country,city",
    query: {
      apiKey: "at_gwoGhWGCqBr8iCsX4zoW9fYSL6kIm",
      ipAdress: "213.126.48.18",
    },
  });
  console.log(url);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, [url]);

  function handleChange(event: ChangeEvent<HTMLInputElement>){
    setIpAdressInput(event.target.value)
  }

  return (
    <div>
        <h1>IP Address Tracker</h1>
        <IpForm
        type="text"
        id="ipform"
        value={ipAdressInput}
        placeholder="Search for any IP address or domain"
        onChange={handleChange}
        />
      <MapTile />;
      {data ? <pre>{JSON.stringify(console.log(data))}</pre> : "Loading..."}
    </div>
  );
}

export default Iptracker;
