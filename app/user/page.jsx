
'use client'; // Add at the very top
export const dynamic = 'force-dynamic'; // Add at the top of user/page.js
 

import React, { useEffect, useState } from 'react';

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/data');
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900'>
      <h1 className='text-2xl font-bold mb-4'>User List</h1>
      <ul className='list-disc'>
        {data.map((user) => (
          <li key={user._id} className='mb-2'>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>   
    </div>
  );
};

export default Page;
 


 
 