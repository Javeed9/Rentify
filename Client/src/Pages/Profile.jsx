import React, { useEffect, useState } from 'react';
import Button from '../Components/Button';
import PropertyCard from '../Components/PropertyCard';
import EditPropertyModal from '../Components/EditPropertyModal'; // Import the modal component
import { getPosts, getCurrentUser, deleteProperty, editProperty } from '../Utils/api';

function Profile() {
    const [propertyTab, setPropertyTab] = useState(true);
    const [properties, setProperties] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editableProperty, setEditableProperty] = useState({});

    useEffect(() => {
        async function fetchPosts() {
            try {
                const id = await getCurrentUser();
                const postsData = await getPosts({ ownerId: id });
                setProperties(postsData);
            } catch (error) {
                console.error("Failed to fetch properties: ", error);
            }
        }
        fetchPosts();
    }, []);

    const openEditModal = (property) => {
        setEditableProperty(property);
        setIsModalOpen(true);
    };

    return (
        <>
            <div className='flex justify-around'>
                <Button onClick={() => setPropertyTab(true)} customStyles="w-1/4" text="Your Properties" />
                <Button onClick={() => setPropertyTab(false)} customStyles="w-1/4" text="Profile" />
            </div>
            <div>
                <h1 className='text-xl font-bold ml-20 my-10 text-blue-700 dark:text-white'>
                    {propertyTab ? "Your Properties" : "Profile"}
                </h1>
            </div>
            {propertyTab ? (
                <div className="flex flex-wrap justify-center m-4">
                    {properties.length === 0 ? (
                        <h3 className='text-lg ml-20 my-10 text-blue-700 dark:text-white center'>No properties yet</h3>
                    ) : (
                        properties.map(property => (
                            <div key={property._id}>
                                <PropertyCard property={property}/>

                                <Button primary={true} customStyles='bg-gray-700 hover:bg-gray-500 mx-6' text="Edit"
                                onClick={() => openEditModal(property)} />
                                
                                <Button primary={true} customStyles='bg-red-700 hover:bg-red-500 mx-6' text="Delete"
                                onClick={() => deleteProperty(property._id)} />
                            </div>
                        ))
                    )}
                </div>
            ) : (
                <div className='m-4'>
                    <h3 className='text-lg ml-20 my-10 text-blue-700 dark:text-white'>Yet to develop</h3>
                </div>
            )}
            {isModalOpen && <EditPropertyModal property={editableProperty} onClose={() => setIsModalOpen(false)} onSave={editProperty} />}
        </>
    );
}

export default Profile;
