import React, { useEffect, useState } from 'react';
import PropertyCard from "../Components/PropertyCard";
import { getPosts } from '../Utils/api';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const postsData = await getPosts();
        setProperties(postsData);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch properties:', error);
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (isLoading) {
    return <p>Loading properties...</p>;
  }

  if (!properties.length) {
    return <p>No properties found.</p>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {properties.map(property => (
        <PropertyCard key={property._id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
