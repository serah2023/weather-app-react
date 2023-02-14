import React from "react"


export default function FormattedDate(props)
{
  let days = ["sunday", "monday", "tuesday", "wednesday", "thursday" , "friday"];

  let day=days[props.date.getDay()];
  let hours=props.date.getHours();

  if (hours<10)
   {hours = `0${hours}`;}

  let minute=props.getMinutes();

  if (minute < 10)
      minute= `0${hours}`;

//   console.log(props.date);
  return (
    <div>
      {" "}
      {day} {hours}: {minute}{" "}
    </div>
  );
}




 

