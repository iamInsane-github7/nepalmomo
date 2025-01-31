import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  const [product, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const getProduct = async () => {
    try {
      let res = await fetch("https://dummyjson.com/recipes");
      res = await res.json();
      setProducts(res?.recipes || []);
    } catch (err) {
      setError("Failed to load products. Please try again later.");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {error ? (
        <div className="text-red-600">{error}</div>
      ) : product.length > 0 ? (
        <div className="border-2 border-red-700 flex flex-wrap">
          {product.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl shadow-2xl p-2 flex items-center justify-center flex-col w-52 gap-10 m-5 shadow-slate-600"
            >
              <NavLink to={`/productDescription/${item.id}`}>
                <img src={item.image} alt={item.name} className="h-28 rounded-xl" />
                <p>{item.name}</p>
              </NavLink>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-8">
          <div>Loading products...</div>
          <div className="mt-4 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-500 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-500 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-500 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-500 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-500 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
