import React from 'react';
import { useParams } from 'react-router-dom';

interface EditItemProps {
    // Define any props specific to EditItem if needed
  }

function EditItem(props: EditItemProps) {
    const { id } = useParams();

  return (
    <div className="content">
      <div>
        <h1>Edit Item {id}</h1>
      </div>

      <hr />

      <div className="formContainer">
        <form className="form">
          <div className="form-item-container">
            <div className="formLabelContainer">
              <label>Category</label>
            </div>
            <div className="formInputContainer">
              <select>
                <option value="Glassware"> Glassware </option>
                <option value="Miscellaneous"> Miscellaneous </option>
              </select>
            </div>
          </div>

          <div className="form-item-container">
            <div className="formLabelContainer">
              <label>Department</label>
            </div>
            <div className="formInputContainer">
              <select>
                <option> 1st Floor </option>
                <option> 2nd Floor </option>
                <option> 3rd Floor </option>
                <option> 4th Floor </option>
                <option> 5th Floor </option>
              </select>
            </div>
          </div>

          <div className="form-item-container">
            <div className="formLabelContainer">
              <label>Brand</label>
            </div>
            <div className="formInputContainer">
              <input placeholder="Brand" />
            </div>
          </div>

          <div className="form-item-container">
            <div className="formLabelContainer">
              <label>Date</label>
            </div>
            <div className="formInputContainer">
              <input placeholder="Date" />
            </div>
          </div>

          <div className="form-item-container">
            <div className="formLabelContainer">
              <label>Quantity</label>
            </div>
            <div className="formInputContainer">
              <input placeholder="Quantity" />
            </div>
          </div>

          <div className="form-item-container">
            <div className="formLabelContainer">
              <label>Unit</label>
            </div>
            <div className="formInputContainer">
              <input placeholder="Unit" />
            </div>
          </div>

          <div className="buttonContainer">
            <div className="cancelContainer">
              <button className="cancelButton">Cancel</button>
            </div>
            <div className="addContainer">
              <button className="addButton">Add</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditItem;
