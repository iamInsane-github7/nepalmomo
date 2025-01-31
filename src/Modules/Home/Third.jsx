import { useEffect, useState } from "react";
import Button from "../../Components/Button";
function Third() {
  const [products, setProducts] = useState([]);
  const [filterproducts, setFilterproducts] = useState([]);

  // const [mydelete, setDelete] = useState([]);
  const getData = async () => {
    const response = await fetch("https://dummyjson.com/recipe");
    const data = await response.json();
    console.log(data.recipes);
    setProducts(data.recipes);
  };
  useEffect(() => {
    getData();
  }, []);

  const getFilterProducts = (country) => {
    const filterItem = products.filter((product) => {
      return product.cuisine === country;
    });
     console.log(filterItem);

    setFilterproducts(filterItem);

  };

  return (
    <div className="border-2 border-red-500  flex flex-col items-center  ">
      <div className="text-center">
        <h1>Our Most Popular recipes </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor
          distinctio eaque voluptate!
        </p>
      </div>
      <div className=" flex gap-x-5   ">
        <button
          onClick={() => {
            getFilterProducts("Mexican");
          }}
          className="border-2 hover:border-black w-20 rounded-full py-1 bg-slate-100 "
        >
          Mexican
        </button>
        <button
          onClick={() => {
            getFilterProducts("Indian");
          }}
          className=" border-2 hover:border-black w-20 rounded-full py-1  bg-slate-100"
        >
          Indian
        </button>
        <button
          onClick={() => {
            getFilterProducts("American");
          }}
          className=" border-2 hover:border-black w-20 rounded-full  py-1 bg-slate-100"
        >
          American
        </button>
      </div>
      <div
        className=" w-[80%]
       flex flex-wrap gap-5 mt-10 py-2 justify-center "
      >
        {filterproducts.length > 0 ? (
          filterproducts.map((item, index) => {
            return (
              <div
                key={index}
                className=" 
               flex flex-col  items-center justify-center p-4 w-56 text-center
                h-44 shadow-md shadow-slate-400   "
              >
                <img src={item.image} className="h-24  w-24 " alt="" />
                <p>{item.name}</p>
                <p>Rs.{item.caloriesPerServing}</p>
              </div>
            );
          })
        ) : products.length > 0 ? (
          products.map((item, index) => {
            return (
              <div
                key={index}
                className=" 
                 flex flex-col  items-center justify-center p-4 w-56 text-center
                  h-44 shadow-md shadow-slate-400   "
              >
                <img src={item.image} className="h-24  w-24 " alt="" />
                <p>{item.name}</p>
                <p>Rs.{item.caloriesPerServing}</p>
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <Button title="Explore Our  Menu" />
    </div>
  );
}

export default Third;