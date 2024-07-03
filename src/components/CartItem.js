
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";


const CartItem = ({item, itemIndex}) => {
// const price=item.price
// const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }



  return (
    <div className="flex justify-center items-center mt-10 ">

      <div className="flex p-10 hover:shadow-lg transition duration-300 " >

        <div className="w-24 h-40 " >
          <img src={item.image} />
        </div>
        <div className=" max-w-72 h-24 ml-10">
          <h1>{item.title}</h1>
          
          <div>
            <p>{item.price}</p>
            <div
            onClick={removeFromCart}>
              <FcDeleteDatabase className="w-8 h-8"/>
            </div>
          </div>

        </div>

       
        
        

          
       
       
      </div>

    </div>
  );
};

export default CartItem;
