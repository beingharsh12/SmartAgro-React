import { useState } from "react";

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
const categories = ["all", "crops", "seeds", "tools", "fertilizers"];


const Test = () => {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [category, setCategory] = useState("all");
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
    (category === "all" || product.category === category)
  );
  return (
   
    <>
    <input type="text" placeholder="Search products..." onChange={(e) => setSearchTerm(e.target.value)} className="border p-2 rounded mb-4 w-1/2 mt-5 border-green-300" />
    <div className="flex flex-wrap mb-4">
    {categories.map((cat) => (
        <button key={cat} onClick={() => setCategory(cat)} className={`border p-2 rounded mb-4 mr-2 ${category === cat ? 'bg-green-800 text-white' : 'bg-white text-black'}`}>
          {cat}
        </button>
      ))}       
      </div>
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 p-4">
        {filteredProducts.length > 0 ? filteredProducts.map((product) => (
            <div key={product.id} className="h-96 w-64 bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center">
                <div className="w-full h-48 mb-4">
                    <img src={product.img} alt={product.name} className="h-full w-full object-cover rounded-lg" />
                </div>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <button className="border bg-green-800 text-white p-2 rounded">Add to Cart</button>
            </div>
        )) : (
            <p >No products found.</p>
        )}
    </section>
    </>

  )
}

export default Test