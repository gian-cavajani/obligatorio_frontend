import React, { useState } from 'react';
import InputField from './InputField';

const AddProductForm = () => {
  const [inputValue, setInputValue] = useState({ name: '', price: '' });
  const { name, price } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };

  const agregar = (e) => {};

  return (
    <div>
      <InputField
        type="text"
        value={name}
        placeholder="Product Name"
        label="Name"
        name="name"
        onChange={handleChange}
      />
      <InputField
        type="number"
        value={price}
        placeholder="Add Price"
        label="Price"
        name="price"
        onChange={handleChange}
      />
      <button color="primary" onClick={agregar}>
        Add
      </button>{' '}
      <button color="secondary">Cancel</button>
    </div>
  );
};

export default AddProductForm;
