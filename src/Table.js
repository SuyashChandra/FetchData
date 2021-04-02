import React, { useEffect, useState } from "react";
import FetchAllData from "./FetchAllData";

export default function Table(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(await FetchAllData());
  });

const a = await FetchData()

  console.log(data);
  const myTable = data.map((lorem) => {
    return (
      <tr>
        <td>{lorem.userId}</td>
        <td>{lorem.title}</td>
        <td>{lorem.body}</td>
      </tr>
    );
  });

  return (
    <table>
      <td>UserId</td>
      <td>Title</td>
      <td>Deescription</td>
      {myTable}
    </table>
  );
}
