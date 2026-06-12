import React from 'react';
import { useState } from 'react';


const productsData = [
  {
    id: 1,
    name: "Wheat Seeds",
    category: "seeds",
    price: "₹500 / 5kg",
    img: "https://tse3.mm.bing.net/th/id/OIP.GMYI69Q4g3Sbg29jawZcHgHaEg?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 2,
    name: "Rice Crop",
    category: "crops",
    price: "₹1200 / 10kg",
    img: "https://media.istockphoto.com/photos/ripe-rice-in-the-field-of-farmland-picture-id622925154?k=20&m=622925154&s=612x612&w=0&h=hLtkpC3VdXeqWhblSowvPRu4XgsCwFW6JQM-Px2KzbY=",
  },
  {
    id: 3,
    name: "Organic Fertilizer",
    category: "fertilizers",
    price: "₹750 / bag",
    img: "https://media.istockphoto.com/photos/agriculture-picture-id606230424?k=20&m=606230424&s=612x612&w=0&h=jYkb4Ca0i0YrVNzkqxr3fSn7OqMAXzlQ9dxlqg-6wVg=",
  },
  {
    id: 4,
    name: "Corn Seeds",
    category: "seeds",
    price: "₹600 / 5kg",
    img: "https://img.freepik.com/premium-photo/corn-seed_57665-23924.jpg?w=2000",
  },
  {
    id: 5,
    name: "Tractor Tool Kit",
    category: "tools",
    price: "₹1500",
    img: "https://img1.exportersindia.com/product_images/bc-full/2022/10/9149623/tractor-tool-kit-1666334845-6594179.jpeg",
  },
  {
    id: 6,
    name: "Tomato Crop",
    category: "crops",
    price: "₹900 / 10kg",
    img: "https://plantix.net/en/library/assets/custom/crop-images/tomato.jpeg",
  },
];
const categories = [
  "all",
  "crops",
  "seeds",
  "tools",
  "fertilizers",
];


const Purchase = () => {
  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");


   const filteredProducts = productsData.filter((product) => {
    const matchesCategory = category === "all" || product.category === category;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleCart = (product) => {
    alert(`Added ${product.name} to cart!`);
  }
  



  return (
    <section className="w-full min-h-screen bg-green-100 px-4 py-30" aria-labelledby="purchase-heading">
        <div className="text-center">
          {/* <p className="font-semibold uppercase tracking-wide text-green-700">SmartAgro Marketplace</p> */}
          <h1 id="purchase-heading" className="mt-3 text-4xl font-bold text-green-800">
            Purchase Farm Essentials
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
            Find reliable seeds, fertilizers, crop protection products, and tools for your seasonal farming needs.
          </p>
        </div>

    <div className="mt-10 flex justify-center">
        <input type="text" 
        aria-label="Search products"
        placeholder="Search products..." 
        className="w-full max-w-md px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
        onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

     <section className="flex flex-wrap justify-center gap-3 my-8 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            aria-label={`Filter by ${cat}`}
            aria-pressed={category === cat}
            onClick={() => setCategory(cat)}
            className={`px-5 py-2 rounded-full transition duration-300 capitalize
              ${
                category === cat
                  ? "bg-green-800 text-white"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
          >
            {cat}
          </button>
        ))}
      </section>
      


        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-green-800">{product.name}</h2>
                <p className="mt-2 text-green-600">{product.price}</p>
                <button 
                aria-label={`Add ${product.name} to cart`}
                onClick={() => handleCart(product)}
                className="mt-4 w-full bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition duration-200">
                  Add to Cart
                </button>
                
              </div>
            </div>
          ))}
        </div>
        
    </section>
  );
};

export default Purchase;
