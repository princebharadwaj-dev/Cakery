import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shopDataContext } from "../context/shopContext";
import { FaStar, FaShoppingCart } from "react-icons/fa";
// import RelatedProduct from "../component/RelatedProduct";
import Loading from "../components/Loading";
import Nav from "../components/Nav";

function ProductDetail() {
  const { productId } = useParams();

  const { products, currency, addtoCart, loading } =
    useContext(shopDataContext);

  const [productData, setProductData] = useState(null);

  const [mainImage, setMainImage] = useState("");

  const [selectedWeight, setSelectedWeight] = useState("");

  const [selectedPrice, setSelectedPrice] = useState("");

  useEffect(() => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);

        setMainImage(item.image1);

        if (item.variants?.length) {
          setSelectedWeight(item.variants[0].weight);

          setSelectedPrice(item.variants[0].price);
        }
      }
    });
  }, [productId, products]);

  if (!productData) {
    return <Loading />;
  }

  const changeWeight = (variant) => {
    setSelectedWeight(variant.weight);

    setSelectedPrice(variant.price);
  };

  return (
    <div className="bg-white min-h-screen">
        <Nav />
      {/* Product Top */}

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">
        {/* Images */}

        <div className="flex gap-5">
          <div className="flex flex-col gap-4">
            {[
              productData.image1,
              productData.image2,
              productData.image3,
              productData.image4,
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setMainImage(img)}
                className="
w-20 h-20 
object-cover
rounded-xl
border
cursor-pointer
hover:border-[#FF7A00]
"
              />
            ))}
          </div>

          <div className="flex-1">
            <img
              src={mainImage}
              className="
w-full
h-[500px]
object-cover
rounded-3xl
shadow-lg
"
            />
          </div>
        </div>

        {/* Details */}

        <div>
          <h1
            className="
text-4xl
font-bold
text-gray-900
"
          >
            {productData.name}
          </h1>

          <div className="flex items-center gap-1 mt-4 text-yellow-400">
            {[1, 2, 3, 4, 5].map((i) => (
              <FaStar key={i} />
            ))}

            <span className="text-gray-500 ml-2">(124 Reviews)</span>
          </div>

          <p
            className="
text-gray-600
mt-5
text-lg
"
          >
            {productData.description}
          </p>

          <div className="flex gap-3 mt-5">
            {productData.eggless && (
              <span
                className="
bg-green-100
text-green-700
px-4 py-2
rounded-full
"
              >
                🥚 Eggless
              </span>
            )}

            {productData.customization && (
              <span
                className="
bg-orange-100
text-orange-700
px-4 py-2
rounded-full
"
              >
                🎂 Custom Cake
              </span>
            )}
          </div>

          <p
            className="
text-3xl
font-bold
text-[#FF7A00]
mt-6
"
          >
            {currency}
            {selectedPrice || productData.price}
          </p>

          

          {/* Weight */}
          <div className="mt-5">
            <h3 className="text-xl font-semibold text-gray-900">
              Choose Weight
            </h3>

           <div className="flex gap-3 mt-3 flex-wrap">
  {productData.variants?.map((variant, index) => (
    <button
      key={index}
      onClick={() => changeWeight(variant)}
      className={`px-5 py-2 rounded-full border ${
        selectedWeight === variant.weight
          ? "bg-[#FF7A00] text-white"
          : "bg-white text-gray-800"
      }`}
    >
      {variant.weight}
    </button>
  ))}
</div> 
          </div>

          <button
            onClick={() => addtoCart(productData._id, selectedWeight)}
            className="
mt-10
bg-[#FF7A00]
hover:bg-[#e86f00]
text-white
px-10
py-4
rounded-full
flex
items-center
gap-3
font-semibold
text-lg
"
          >
            <FaShoppingCart />

            {loading ? <Loading /> : "Add To Cart"}
          </button>

          <div
            className="
border-t
mt-10
pt-5
text-gray-600
space-y-2
"
          >
            <p>🚚 Fresh delivery available</p>

            <p>🎂 Made with premium ingredients</p>

            <p>💳 Cash on Delivery available</p>
          </div>
        </div>
      </div>

      {/* Description */}

      <div
        className="
max-w-6xl mx-auto
px-6
pb-20
"
      >
        <h2
          className="
text-3xl
font-bold
mb-5
"
        >
          Product Details
        </h2>

        <div
          className="
bg-[#FFF4E8]
p-8
rounded-3xl
text-gray-700
"
        >
          <p>
            Freshly baked cake prepared with love. Perfect for birthdays,
            anniversaries and special moments.
          </p>
        </div>
      </div>

      {/* <RelatedProduct
        category={productData.category}
        currentProductId={productData._id}
      /> */}
    </div>
  );
}

export default ProductDetail;
