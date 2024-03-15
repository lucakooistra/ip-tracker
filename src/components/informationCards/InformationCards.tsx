import "./informationCards.scss";

type InformationCardsProps = {
  ipAddressData: string | undefined;
  locationTotalData: string;
  timezoneData: string | undefined;
  nameData: string |  undefined;
};

export function InformationCards({
  ipAddressData,
  locationTotalData,
  timezoneData,
  nameData
}: InformationCardsProps) {
  return (
    <div className="information-cards">
      <div className="information-cards__card">
        <div className="information-cards__card-inner">
          <h3 className="information-cards__title">Ip address</h3>
          <p className="information-cards__text">
            {ipAddressData ? ipAddressData : "00.00.000.000"}
          </p>
        </div>
        <div className="information-cards__card-inner">
          <h3 className="information-cards__title">Location</h3>
          <p className="information-cards__text">{locationTotalData}</p>
        </div>
        <div className="information-cards__card-inner">
          <h3 className="information-cards__title">Timezone</h3>
          <p className="information-cards__text">{timezoneData ? timezoneData : "search for a timezone"}</p>
        </div>
        <div className="information-cards__card-inner">
          <h3 className="information-cards__title">Name</h3>
          <p className="information-cards__text">{nameData ? nameData : "search for a name"}</p>
        </div>
      </div>
    </div>
  );
}
