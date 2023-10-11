import React, { useState } from "react";
import { Link } from "react-router-dom";

interface InventoryItem {
  id: number;
  itemName: string;
  lastmodified: string;
  brand: string;
  quantity: number;
  unit: string;
  breakages: number;
  ein: number;
  out: number;
  balance: number;
  remarks: string;
}

function Other() {
  const [selectedFloor, setSelectedFloor] = useState("2nd Floor");

  const handleFloorClick = (floor: string) => {
    setSelectedFloor(floor);
  };

  const inventoryData: InventoryItem[] = [
    { id: 1, itemName: "Beaker", lastmodified: "10/1/23", brand: "Pyrex", quantity: 10, unit: "100mL", breakages: 15, ein: 6, out: 10, balance: 15, remarks: "N/A" },
    // Add more data items as needed
  ];

  return (
    <div className="content">
      <div className="titleHeader">
        <div className='titleName'>Manage Inventory</div>
      </div>

      {/* Navigation for Floors */}
      <div className="floorNav">
        <div
          className={`flr ${selectedFloor === "2nd Floor" ? "selectedFloor" : ""}`}
          onClick={() => handleFloorClick("2nd Floor")}
        >
          <div className="flrLabel">2nd Floor</div>
        </div>
        <div
          className={`flr ${selectedFloor === "3rd Floor" ? "selectedFloor" : ""}`}
          onClick={() => handleFloorClick("3rd Floor")}
        >
          <div className="flrLabel">3rd Floor</div>
        </div>
        <div
          className={`flr ${selectedFloor === "4th Floor" ? "selectedFloor" : ""}`}
          onClick={() => handleFloorClick("4th Floor")}
        >
          <div className="flrLabel">4th Floor</div>
        </div>
        <div
          className={`flr ${selectedFloor === "5th Floor" ? "selectedFloor" : ""}`}
          onClick={() => handleFloorClick("5th Floor")}
        >
          <div className="flrLabel">5th Floor</div>
        </div>
      </div>

      {/* Floor Inventory Label */}
      <div className="flrInventoryLabelContainer">
        <div className="flrInventoryLabel">{selectedFloor} Glassware</div>
      </div>

      <div className="btnsearchContainer">
        {/* Add Item Button */}
        <div className="addBtnContainer">
          <Link to="/add-item">
            <button className="addItemBtn">Add Item</button>
          </Link>
        </div>
        {/* Search Bar */}
        <div className="addBtnContainer">
          <input className="searchbar" placeholder="Search"></input>
        </div>
      </div>

      {/* Renders Equipment Table/Inventory */}
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Last Modified</th>
              <th>Brand</th>
              <th>Qty</th>
              <th>Unit</th>
              <th>Breakages</th>
              <th>In</th>
              <th>Out</th>
              <th>Balance</th>
              <th>Remarks</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.itemName}</td>
                <td>{item.lastmodified}</td>
                <td>{item.brand}</td>
                <td>{item.quantity}</td>
                <td>{item.unit}</td>
                <td>{item.breakages}</td>
                <td>{item.ein}</td>
                <td>{item.out}</td>
                <td>{item.balance}</td>
                <td>{item.remarks}</td>
                <td className="buttons">
                  <Link to={`/edit/${item.id}`}>
                    <button className="addItemBtn">Edit</button>
                  </Link>
                  <button className="deleteItemBtn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Other;
