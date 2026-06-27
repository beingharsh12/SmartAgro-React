import { useState } from 'react'

const CART_STORAGE_KEY = "smartagro-cart";

const Cart = () => {
  
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]");
    return savedCart;
  });

  const updateCart = (items) => {
    setCartItems(items);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  };

  const increaseQuantity = (productId) => {
    updateCart(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    const updatedItems = cartItems
      .map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);

    updateCart(updatedItems);
  };

  const removeItem = (productId) => {
    updateCart(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <section className="w-full min-h-screen bg-green-100 px-4 py-30" aria-labelledby="cart-heading">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 id="cart-heading" className="text-4xl font-bold text-green-800">SmartAgro Cart</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
            Review the farm essentials you added from the purchase page.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="mt-10 rounded-lg bg-white p-8 text-center shadow-md">
            <h2 className="text-2xl font-semibold text-green-800">Your cart is empty</h2>
            <p className="mt-3 text-gray-700">Add seeds, crops, tools, or fertilizers to see them here.</p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6">
            {cartItems.map((item) => (
              <article key={item.id} className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-md md:flex-row md:items-center">
                <img src={item.img} alt={item.name} className="h-32 w-full rounded object-cover md:w-44" />
                <div className="flex-1">
                  <p className="text-sm font-semibold uppercase tracking-wide text-green-600">{item.category}</p>
                  <h2 className="mt-1 text-2xl font-bold text-green-800">{item.name}</h2>
                  <p className="mt-2 text-lg font-semibold text-green-700">{item.price}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    aria-label={`Decrease ${item.name} quantity`}
                    onClick={() => decreaseQuantity(item.id)}
                    className="h-10 w-10 rounded bg-green-100 text-xl font-bold text-green-800 hover:bg-green-200"
                  >
                    -
                  </button>
                  <span className="min-w-8 text-center text-lg font-bold text-gray-800">{item.quantity}</span>
                  <button
                    type="button"
                    aria-label={`Increase ${item.name} quantity`}
                    onClick={() => increaseQuantity(item.id)}
                    className="h-10 w-10 rounded bg-green-700 text-xl font-bold text-white hover:bg-green-800"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="rounded border border-red-200 px-4 py-2 font-semibold text-red-600 hover:bg-red-50"
                >
                  Remove
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Cart
