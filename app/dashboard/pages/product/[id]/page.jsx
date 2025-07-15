"use client";

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Details from '../../../../../allComponets/product/Details';

const Page = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;

    const fetchHeroData = async () => {
      try {
        const response = await fetch(`/api/data/allData/product/byId?id=${id}`);

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        setData(result.data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, [id]);

  if (loading) {
    return (
      <div className="mt-14 min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-14 min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-lg">{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="mt-14 min-h-screen flex items-center justify-center">
        <p className="text-gray-500">No data found.</p>
      </div>
    );
  }

  return (
    <div className="mt-20 min-h-screen px-4">
      {/* Uncomment this when you complete the Details component */}
      <Details data={data} /> 
    </div>
  );
};

export default Page;
