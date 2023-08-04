import React from "react";
import styles from "../styles/PurchaseHistory.module.css";

const PurchaseHistory = () => {
  // Dummy purchase history data
  const dummyPurchaseHistory = [
    {
        id: 1,
        gallons: 100,
        name: "John Doe",
        address: "123 Main St, TX",
        date: "2023-08-01",
        price: 171
      },
      {
        id: 2,
        gallons: 150,
        name: "John Doe",
        address: "123 Main St, TX",
        date: "2023-07-10",
        price: 256.5
      },
      {
        id: 3,
        gallons: 185,     
        name: "John Doe",
        address: "123 Main St, TX",
        date: "2023-07-25",
        price: 316.35
      },
      {
        id: 4,
        gallons: 1500,  
        name: "John Doe",
        address: "123 Main St, TX",
        date: "2023-08-02",
        price: 2542.5
      },
      {
        id: 5,
        gallons: 2000,
        name: "John Doe",
        address: "123 Main St, TX",
        date: "2023-07-15",
        price: 3390
      }
  ];
  return (
    <div className={styles["purchase-history-container"]}>
      <h2>Purchase History</h2>
      <table className={styles["purchase-history-table"]}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gallons</th>
            <th>Address</th>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {dummyPurchaseHistory.map((purchase) => (
            <tr key={purchase.id}>
              <td>{purchase.id}</td>
              <td>{purchase.name}</td>
              <td>{purchase.gallons}</td>
              <td>{purchase.address}</td>
              <td>{purchase.date}</td>
              <td>${purchase.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseHistory;