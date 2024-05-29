import React, { useEffect, useState } from "react";
import { getUser } from "../api/api";

export default function Tabel() {
  const [user, setdata] = useState([]);

  useEffect(() => {
    getAllUsers();
    // Fetch data every minute
    const intervalId = setInterval(() => {
      getAllUsers();
    }, 60000); // 60000 milliseconds = 1 minute

    // Clean up function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const getAllUsers = async () => {
    let response = await getUser();
    setdata(response.data);
  };

  return (
    <>
    <div className="container-fluid">
      <p className="trans_color text-center fs-5">Average BTC/INR net price including commission</p>
    </div>
      <table className="table table-dark table_custom table-borderless table-striped text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Platform</th>
            <th scope="col">Last Traded Price</th>
            <th scope="col">Buy / Sell Price</th>
            <th scope="col">Difference</th>
            <th scope="col">Savings</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, index) => (
            <tr key={index} className="tabletr">
              <td className="tableBgth" scope="row">
                {index + 1}
              </td>
              <td className="tableBgth">{user?.name}</td>
              <td className="tableBgth">₹ {user?.last}</td>
              <td className="tableBgth">
                ₹ {user?.buy} / ₹ {user?.sell}
              </td>
              <td className="tableBgth">
                {(((user?.sell - user?.buy) / user?.buy) * 100).toFixed(2)}%
                {/*  difference in percentage */}
              </td>
              <td className="tableBgth">₹ {user?.sell - user?.buy}</td>
              {/* savings  */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
