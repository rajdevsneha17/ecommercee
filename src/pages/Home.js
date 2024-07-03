import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import Navbar from "../components/Navbar";
import products from "../data.json"
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
const[query,setQuery]=useState(" ")
  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();
       
      setPosts(data);
    }
    catch(error) {
      console.log("Error");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  },[])

  return (
    <div>

      <div className="flex justify-center items-center">
       <input type="text" placeholder="Search" className="w-96 border-slate-200 border-2 rounded-full pl-10 shadow-lg h-12 focus:outline-none mt-10"  onChange={(e)=>{
        setQuery(e.target.value)
       }}></input>
      
     <div>
     
     </div>
     </div>
    <div>
      {
        loading ? <Spinner />  :
        posts.length > 0 ? 
        (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto   min-h-[80vh]">
          {
        products.filter((val)=>{
          if(query==" "){
            return val
          }else if(val.title.toLowerCase().includes(query.toLocaleLowerCase())){
            return val
          }
        })
        .map((val)=>{
          return(
            <div key={val.id}>
             <Product key = {val.id} post={val}/>
               </div>
          )

        })
      }
         
        </div>) :
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div> 
      }

      
    </div>
    </div>
  );
};

export default Home;
