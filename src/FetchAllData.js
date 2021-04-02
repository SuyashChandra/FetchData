import React, { useState } from "react";
// import Table from "./Table";

export default async function FetchAllData() {
  //   const [data1, setData] = useState({});
  //   console.log(props);

  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   return console.log(data);
      return data;
    });
}
