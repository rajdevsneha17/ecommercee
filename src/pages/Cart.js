import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

import Modal from "../components/Modal";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal,setShowModal]=useState(false)
  //dekh aethe cart.reduce as a parameter pass hoya setTotalAmount function nu that is known as callback function
  
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

 
  return (
    <div className= " flex w-full flex-col" >
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-4xl mt-5">
          Your Cart
        </h1>
      </div>
      {cart.length > 0 ? (
        <div >
          <div className=" flex flex-col ">
            {cart.map((item, index) => (
              <div key={item.id}>
              <CartItem  item={item} itemIndex={index} />
              
              </div>
            ))}
             
          </div>

         

         <div className=" flex justify-center items-center bg-slate-300 gap-10 mt-10 shadow-lg">
         <div className="" >
            
            <div className="text-white text-2xl m-2   ">
              
              
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="text-white text-xl  ">
              <p>Total Amount: ${totalAmount}</p>
               <button onClick={()=>setShowModal(true)} className="border-2 mt-5 rounded-md p-2 hover:bg-slate-800 mb-5 shadow-md">
                CheckOut Now
              </button>
              
              
            </div>
          </div>
        </div>
         </div>
      ) : (
        <div className="flex justify-center items-center flex-col mt-5">
          <h1>Cart Empty</h1>
          <Link to={"/"}>
            <button>Shop Now</button>
          </Link>
        </div>
      )}
      {showModal && <Modal setShowModal={setShowModal} totalAmount={totalAmount}/>}
    </div>
  );
};

export default Cart;
