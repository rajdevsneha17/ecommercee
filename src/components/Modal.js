import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Modal = ({ setShowModal, totalAmount }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [data, setData] = useState({
    email: "",
    address: "",
    phone: ""
  });

  const handleOk = () => {
    if (!data.email || !data.address || !data.phone) {
      setError("All Fields are Mandatory");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      axios.post("https://ecommerceback-o9cs.vercel.app/api/v1/order", data)
        .then(res => {
          if (res.data === "notexist") {
            toast.error("Please Login or Signup First");
            navigate("/signup");
          } else {
            toast.success("Order Placed");
          }
          console.log(res);
          setShowModal(false);
        })
        .catch(err => {
          console.log("Error:", err);
        });
    }
  };

  const changeHandler = (event) => {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  console.log(totalAmount);

  return (
    <>
      <div className="fixed inset-0 z-[1000] grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm -ml-4">
        <div className="w-11/12 max-w-[400px] min-w-[300px] rounded-lg border border-gray-300 bg-white p-6 flex flex-col items-center space-y-4">
          <div className="text-2xl font-semibold text-black">Order Details</div>
          <div className="flex flex-col w-full space-y-2">
            <label className="text-black">Your Phone Number</label>
            <input 
              type="tel" 
              placeholder="123-45-678" 
              name="phone" 
              onChange={changeHandler} 
              className="w-full p-2 border border-gray-300 rounded-md" 
            />
          </div>
          <div className="flex flex-col w-full space-y-2">
            <label className="text-black">Your Email ID</label>
            <input 
              type="email" 
              name="email" 
              onChange={changeHandler} 
              className="w-full p-2 border border-gray-300 rounded-md" 
            />
          </div>
          <div className="flex flex-col w-full space-y-2">
            <label className="text-black">Your Permanent Address</label>
            <input 
              type="text" 
              name="address" 
              onChange={changeHandler} 
              className="w-full p-2 border border-gray-300 rounded-md" 
            />
          </div>
          <p className="text-black">Your Total Bill: {totalAmount}</p>
          <div className="flex space-x-4">
            <button 
              onClick={handleOk} 
              className="text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-600"
            >
              OK
            </button>
            <button 
              onClick={() => setShowModal(false)} 
              className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
          {error && <div className="text-red-500">{error}</div>}
        </div>
      </div>
    </>
  );
}

export default Modal;
