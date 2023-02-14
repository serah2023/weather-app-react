import React from "react";

export default function FormattedDate(props) {
  console.log(props.date);
  //  let day=props.date.getDay();

  let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];

  let day = days[props.date.getDay()];

  // return `${day} 12:00`;

  let hours = props.date.getHours();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  // return `${day} ${hours}:00`;

  let minute = props.date.getMinutes();

  if (minute < 10) {
    minute = `0${minute}`;
  }

  return (
    <div>
      {" "}
      {day} {hours}: {minute}{" "}
    </div>
  );
}
