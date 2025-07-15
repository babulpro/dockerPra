 

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
 

const AllProduct = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrderData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/data/allData/product/getAllProduct", {
        cache: "no-store"
      });
      const result = await response.json();

      if (result.status === "ok") {
        setProduct(result.data || []);
      } else {
        setError(result.message || "Failed to fetch product");
        toast.error(result.message || "Failed to fetch product");
      }
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchOrderData();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <span className="loading loading-spinner loading-lg"></span>
      <span className="ml-4 text-lg">Loading your product...</span>
    </div>
  );

  

  if (product.length === 0) return (
    <div className="text-center py-12 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">No product Found</h1>
      <p className="text-gray-500 mb-6">You haven't placed any product yet.</p>
      <Link href="/dashboard/pages/products" className="btn btn-primary">
        Browse Products
      </Link>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">View All Products</h1>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Products</div>
            <div className="stat-value">{product.length}</div>
          </div>
        </div>
      </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product.map((product) => (
                <div key={product._id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <Link href={`/dashboard/pages/product/${product._id}`} className="block group">
                        <div className="aspect-square overflow-hidden rounded-lg">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                                onError={(e) => {
                                    e.target.src = '/placeholder-product.png';
                                }}
                            />
                        </div>
                        <h3 className="mt-3 text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {product.name}
                        </h3>
                        <p className="mt-1 text-gray-600 font-medium">
                            ৳ {product.price?.toLocaleString()}
                        </p>
                        <p className="mt-1 text-gray-600 font-medium">
                            Stock: {product.stock?.toLocaleString()}
                        </p>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  );
};

export default AllProduct;



 