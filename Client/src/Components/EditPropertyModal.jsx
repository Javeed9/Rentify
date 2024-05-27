import React, { useState } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function EditPropertyModal({ property, onClose, onSave }) {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        city: property.city || '',
        area: property.area || '',
        address: property.address || '',
        bedrooms: property.bedrooms || '',
        bathrooms: property.bathrooms || '',
        description: property.description || ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        onSave(property._id, formData, navigate);
        onClose();
    };

    return (
        <div className="modal bg-blue-300 bg-opacity-50 fixed h-screen w-screen top-0 left-0 flex justify-center items-center">
            <form className="flex flex-col gap-4 p-8 bg-blue-300 rounded-md">
                <label className='mx-auto'><p className='w-12'>City: </p><input className="rounded-md w-96" type="text" name="city" value={formData.city} onChange={handleChange} /></label>
                <label className='mx-auto'><p className='w-12'>Area: </p><input className="rounded-md w-96" type="text" name="area" value={formData.area} onChange={handleChange} /></label>
                <label className='mx-auto'><p className='w-12'>Address: </p><input className="rounded-md w-96" type="text" name="address" value={formData.address} onChange={handleChange} /></label>
                <label className='mx-auto'><p className='w-12'>Bedrooms: </p><input className="rounded-md w-96" type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} /></label>
                <label className='mx-auto'><p className='w-12'>Bathrooms: </p><input className="rounded-md w-96" type="number" name="bathrooms" value={formData.bathrooms} onChange={handleChange} /></label>
                <label className='mx-auto'><p className='w-12'>Description: </p><textarea className="rounded-md w-96" name="description" value={formData.description} onChange={handleChange} /></label>
                <div className='flex gap-4 justify-center'>
                <Button primary={true} type="submit" onClick={handleSubmit}>Save Changes</Button>
                <Button type="button" onClick={onClose}>Cancel</Button>
                </div>
            </form>
        </div>
    );
}

export default EditPropertyModal;
