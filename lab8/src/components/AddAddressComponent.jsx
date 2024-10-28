import React from "react";

const AddAddressComponent = ({ newAddress, onNewAddressChange, onAddAddress }) => {
  return (
    <form onSubmit={onAddAddress}>
      <input
        type="text"
        placeholder="Add new Address"
        value={newAddress}
        onChange={onNewAddressChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddAddressComponent;
