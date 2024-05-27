import React, { useState } from 'react';
import { Button } from "../Components";
import Modal from "./Modal";

const PropertyCard = ({ property }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="border rounded-lg shadow-lg p-4 m-4">
      <h5 className="text-lg font-bold">{property.city}</h5>
      <p>Area: {property.area}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Bathrooms: {property.bathrooms}</p>
      <p>{property.description}</p>
      <div className='text-center my-2'>
        <Button onClick={openModal}>Interested</Button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h5 className="text-lg font-bold">Owner Information</h5>
          <p>Name: {property.owner.firstName} {property.owner.lastName}</p>
          <p>Email: {property.owner.email}</p>
          <p>Phone: {property.owner.phoneNumber}</p>
        </Modal>
      </div>
    </div>
  );
};

export default PropertyCard;
