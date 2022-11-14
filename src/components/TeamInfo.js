import React from "react";

class TeamInfo extends React.Component {
  render() {
    const { shortName, crestUrl, venue, address, email, phone, founded } =
      this.props.team;

    return (
      <div className="teamCard">
        <img src={crestUrl} alt={shortName} />
        <p>{shortName}</p>
        <p>{venue}</p>
        <p>{address}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{founded}</p>
      </div>
    );
  }
}
export default TeamInfo;
