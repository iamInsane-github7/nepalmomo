import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../Context/CartProvider";
function ProductDescription() {
  const { dispatch } = useContext(cartContext);
  const { id } = useParams();
  const [products, setProducts] = useState();
  console.log(id);
  const getSingleProduct = async () => {
    try {
      let res = await fetch(`https://dummyjson.com/recipes/${id}`);
      res = await res.json();
      setProducts(res);
      console.log(res);
    } catch (e) {
      console.log("Error While fetching data ", e);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, [id]);
  return (
    <div>
      {products ? (
        <div>
          <div className=" my-10  flex  w-[50%] gap-x-5 p-5 justify-center ml-16 ">
            <img src={products.image} className="h-56 rounded-sm" alt="" />
            <div className="flex flex-col gap-y-6 ">
              <p>{products.name}</p>
              <p>Rs.{products.caloriesPerServing}</p>
              <p>rating:{products.rating}</p>
              <div>
                <button className="p-3 bg-black text-white">Buy Now</button>
                <button
                  onClick={() => {
                    dispatch({ type: "ADD_TO_CART", payload: products });
                  }}
                  className="p-3 ml-4 bg-red-600 text-white"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>

          <div className=" m-auto p-5 w-[80%] ">
            <div className="font-serif text-xl">
              <h1 className="text-3xl font-bold">ProductDescription</h1>
              <p>Meal-Type:{products.mealType[0]}</p>
              <p>Cook Time :{products.cookTimeMinutes} Minutes</p>
              <p>Cuisine :{products.cuisine}</p>
              <p>Difficulty:{products.difficulty}</p>
            </div>
            <h1 className="text-3xl font-bold"> Ingredients:</h1>
            <p className=" mt-3 p-1 w-[27rem ] h-32 flex flex-col flex-wrap ">
              {products.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ProductDescription;
