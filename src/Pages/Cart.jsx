import { useContext } from "react";
import { cartContext } from "../Context/CartProvider";
import { MdDelete } from "react-icons/md";
import{ NavLink } from "react-router-dom";
function Cart() {
  const { state, dispatch } = useContext(cartContext);
  const totalAmount = state.cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.caloriesPerServing;
  }
   ,0
  )
  const totalItems = state.cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  },0)
  return (
    <div>
      <div>
        {state.cartItems.length > 0 ? (
          <div className="flex  justify-center ">
            <div className="my-5">
              {state.cartItems.map((Item) => {
                return (
                  <div
                    key={Item.id}
                    className="flex rounded  my-10 shadow-md shadow-slate-500 gap-x-10   m-auto  w-[95%]  "
                  >
                    <div>
                      <img className="h-28" src={Item.image} alt="" />
                    </div>

                    <div className="flex">
                      <div className="mt-5  w-[450px] ">
                        <p className="text-2xl">{Item.name}</p>

                        <p>Rs.{Item.caloriesPerServing}</p>

                        <button
                          onClick={() => {
                            dispatch({
                              type: "REMOVE",
                              payload: { id: Item.id },
                            });
                          }}
                          className="text-2xl"
                        >
                          <MdDelete />
                        </button>
                      </div>
                      <div className="mt-5 space-x-3 w-28 ">
                        <button
                          onClick={() => {
                            dispatch({
                              type: "INCREMENT",
                              payload: { id: Item.id },
                            });
                          }}
                          className="bg-slate-300 w-8 h-8 text-white rounded-xl"
                        >
                          +
                        </button>
                        <span className="text-lg">{Item.quantity}</span>
                        <button
                          onClick={() => {
                            dispatch({
                              type: "DECREMENT",
                              payload: { id: Item.id },
                            });
                          }}
                          className="bg-slate-300 w-8 h-8 text-white rounded-xl"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              <button
                onClick={() => {
                  dispatch({
                    type: "CLEAR",
                  });
                }}
                className=" bg-red-600  text-white rounded-xl w-32 h-8  ml-36 text-1xl "
              >
                Clear Cart
              </button>
            </div>

            <div className="w-72 h-64 border-2 flex flex-col justify-center pl-5  space-y-4 border-red-600  mt-24 ml-20   ">
              <h1>Order Summary</h1>
              <h1>Shipping Charge: Rs.{100}</h1>
              <p>Total: Rs.{totalAmount+100}</p>
              <button className="w-64  p-3 bg-orange-600  text-white">
                <NavLink to ="/payment">
                
                Procced To CheckOut({totalItems})
                </NavLink>
              </button>
            </div>
          </div>
        ) : (
          
          <div className=" w-96 text-center   m-auto mt-20 ">
            <NavLink to="/menu">
              <img
                className="h-56"
                src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--wishlist-bucket-shopping-state-pack-design-development-illustrations-1800917.png?f=webp"
                alt=""
              />
            </NavLink>
            <p className="p-5 text-2xl ">
              Empty Cart{" "}
              <NavLink to="/menu" className="underline text-red-500">
                Shop Now
              </NavLink>
            </p>
          </div>
         
        )}
      </div>
    </div>
  );
}
export default Cart;
