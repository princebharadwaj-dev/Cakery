import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import upload from "../assets/upload image.jpg";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

function Add() {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Cake");
  const [flavor, setFlavor] = useState("");
  const [stock, setStock] = useState("");
  const [eggless, setEggless] = useState(false);
  const [customization, setCustomization] = useState(false);
  const [bestseller, setBestSeller] = useState(false);
  const [variants, setVariants] = useState([
  {
    weight: "",
    price: ""
  }
])
  const [loading, setLoading] = useState(false);

  const { serverUrl } = useContext(authDataContext);

  const addVariant = () => {
  setVariants([
    ...variants,
    {
      weight: "",
      price: ""
    }
  ]);
};


const removeVariant = (index) => {
  const newVariants = variants.filter((_, i) => i !== index);
  setVariants(newVariants);
};


const handleVariantChange = (index, field, value) => {
  const updated = [...variants];

  updated[index][field] = value;

  setVariants(updated);
};

  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append(
  "variants",
  JSON.stringify(variants)
      )
      formData.append("flavor", flavor);
      formData.append("stock", stock);
      formData.append("eggless", eggless);
      formData.append("customization", customization);
      formData.append("bestseller", bestseller);
      formData.append("image1", image1);
      formData.append("image2", image2);
      formData.append("image3", image3);
      formData.append("image4", image4);

      const result = await axios.post(
        serverUrl + "/api/product/addproduct",
        formData,
        {
          withCredentials: true,
        },
      );
      console.log(result);
      console.log(result.data);

      toast.success("Product Added Successfully");

      setName("");
      setDescription("");
      setFlavor("");
      setVariants([
 {
  weight:"",
  price:""
 }
])
      setStock("");

      setImage1(false);
      setImage2(false);
      setImage3(false);
      setImage4(false);

      setEggless(false);
      setCustomization(false);
      setBestSeller(false);

      setLoading(false);
    } catch (error) {
      console.log(error);
  console.log(error.response?.data);

  toast.error(error.response?.data?.message || "Product Add Failed");
  setLoading(false);
    }
  };

  return (
    <div className="w-[100vw] min-h-[100vh] bg-[#ffff] text-black">
      <Nav />
      <Sidebar />

      <div className="w-[82%] ml-auto">
        <form
          onSubmit={handleAddProduct}
          className="flex flex-col gap-8 mt-[70px] px-10 py-20"
        >
          <h1 className="text-4xl text-[#FF7A00] font-bold">Add Bakery Product</h1>

          <p className="text-xl">Upload Images</p>

          <div className="flex gap-4">
            {[
              [image1, setImage1, "image1"],
              [image2, setImage2, "image2"],
              [image3, setImage3, "image3"],
              [image4, setImage4, "image4"],
            ].map((item, index) => (
              <label key={index} htmlFor={item[2]}>
                <img
                  src={!item[0] ? upload : URL.createObjectURL(item[0])}
                  className="w-24 h-24 object-cover rounded-lg border-2 cursor-pointer"
                />

                <input
                  hidden
                  id={item[2]}
                  type="file"
                  required
                  onChange={(e) => item[1](e.target.files[0])}
                />
              </label>
            ))}
          </div>

          <input
            className="input border border-gray-200 p-3 rounded-xl outline-none focus:border-[#FF7A00]"
            placeholder="Cake Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <textarea
            className="input h-28 border border-gray-200 p-3 rounded-xl outline-none focus:border-[#FF7A00]"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <select
            className="input"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Cake</option>
            <option>Pastry</option>
            <option>Cookies</option>
            <option>Bread</option>
            <option>Donuts</option>
            <option>Gift Hamper</option>
          </select>

          <input
            className="input border border-gray-200 p-3 rounded-xl outline-none focus:border-[#FF7A00]"
            placeholder="Flavor (Chocolate, Vanilla)"
            value={flavor}
            onChange={(e) => setFlavor(e.target.value)}
          />

         <div>

<h2 className="text-xl font-semibold">
Cake Sizes & Price
</h2>


{variants.map((item,index)=>(

<div 
key={index}
className="flex gap-4 mt-3"
>

<input
className="border p-3 rounded-xl"
placeholder="Weight (500g)"
value={item.weight}
onChange={(e)=>
handleVariantChange(
index,
"weight",
e.target.value
)}
/>


<input
className="border p-3 rounded-xl"
type="number"
placeholder="Price"
value={item.price}
onChange={(e)=>
handleVariantChange(
index,
"price",
e.target.value
)}
/>


{
variants.length > 1 &&
<button
type="button"
onClick={()=>removeVariant(index)}
className="text-red-500"
>
Remove
</button>
}

</div>

))}


<button
type="button"
onClick={addVariant}
className="mt-4 bg-gray-200 px-5 py-2 rounded-xl"
>
+ Add Size
</button>

</div>
          

          <input
            className="input border border-gray-200 p-3 rounded-xl outline-none focus:border-[#FF7A00]"
            type="number"
            placeholder="Stock Quantity"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />

          <div className="flex gap-3">
            <input
              type="checkbox"
              checked={eggless}
              onChange={() => setEggless(!eggless)}
            />

            <label>Eggless</label>
          </div>

          <div className="flex gap-3">
            <input
              type="checkbox"
              checked={customization}
              onChange={() => setCustomization(!customization)}
            />

            <label>Custom Message Available</label>
          </div>

          <div className="flex gap-3">
            <input
              type="checkbox"
              checked={bestseller}
              onChange={() => setBestSeller(!bestseller)}
            />

            <label>Best Seller</label>
          </div>

          <button className="bg-[#65d8f7] text-black w-40 py-3 rounded-xl">
            {loading ? <Loading /> : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
