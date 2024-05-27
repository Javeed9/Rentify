import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addproperty } from '../Utils/api';

function PropertyForm() {
  
  const [formData, setFormData] = useState({
    city: '',
    area: '',
    address: '',
    bedrooms: '',
    bathrooms: '',
    description: ''
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const property = {
      ...formData,
      bedrooms: Number(formData.bedrooms),
      bathrooms: Number(formData.bathrooms)
    };

    try {
      addproperty(property, navigate);
    } catch (error) {
      console.error('Failed to add property:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow">
        <h1 className="text-xl font-bold mb-6">Add a Property</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="area"
            placeholder="Area"
            value={formData.area}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border rounded-lg"
          />
          <input
            type="number"
            name="bedrooms"
            placeholder="Number of Bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border rounded-lg"
          />
          <input
            type="number"
            name="bathrooms"
            placeholder="Number of Bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border rounded-lg"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit Property
          </button>
        </form>
      </div>
    </div>
  );
}

export default PropertyForm;
