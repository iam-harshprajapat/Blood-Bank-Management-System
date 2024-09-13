import React, { useState, useEffect } from "react";
import Header from "../../components/shared/Layout/Header";
import API from "./../../services/API";
import moment from "moment";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, Legend } from 'recharts';

const Analytics = () => {
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const colors = [
    "#884A39",
    "#C38154",
    "#FFC26F",
    "#4F709C",
    "#4942E4",
    "#0079FF",
    "#FF0060",
    "#22A699",
  ];

  // GET BLOOD GROUP DATA
  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/bloodGroups-data");
      if (data?.success) {
        setData(data?.bloodGroupData);
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Lifecycle method
  useEffect(() => {
    getBloodGroupData();
  }, []);

  // Get function
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-recent-inventory");
      if (data?.success) {
        setInventoryData(data?.inventory);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);

  return (
    <>
      <Header />
      <div className="d-flex flex-row flex-wrap">
        {data?.map((record, i) => (
          <div className="a-cardbox">
            <h4>{record.bloodGroup}</h4>
            <h5 className="in">Total In : {record.totalIn} ml</h5>
            <h5 className="out">Total Out : {record.totalOut} ml</h5>
            <div className="avilblood">
              <h3>Total Available : {record.availabeBlood} ml</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="container my-3 mt-5" >
        <h1 className="my-3">Blood Group Analytics</h1>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <XAxis dataKey="bloodGroup" />
            <Tooltip />
            <Legend />
            <Bar dataKey="availabeBlood" fill="#0CB8B6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="container my-3">
        <h1 className="my-3">Recent Blood Transactions</h1>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Blood Group</th>
              <th scope="col">Inventory Type</th>
              <th scope="col">Quantity</th>
              <th scope="col">Donor Email</th>
              <th scope="col">Time & Date</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData?.map((record) => (
              <tr key={record._id}>
                <td>{record.bloodGroup}</td>
                <td>{record.inventoryType}</td>
                <td>{record.quantity} (ML)</td>
                <td>{record.email}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Analytics;
