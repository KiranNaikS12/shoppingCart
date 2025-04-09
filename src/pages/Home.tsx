import { useCallback, useEffect, useState } from "react"
import Header from "../components/Header"
import { Product, PRODUCTS } from "../utils/products"



const Home = () => {
    const [cartItems, setCartItems] = useState<number[]>([]);
    const [inCart, setInCart] = useState<Product[]>([]);
    const [subTotal, setSubTotal] = useState<number>(0);

    useEffect(() => {
        const filterdItems = PRODUCTS.filter((item) => cartItems.includes(item.id))
        setInCart(filterdItems)
    }, [cartItems])

    // update subTotal whenever qunatity changes
    useEffect(() => {
        const total = inCart.reduce(
            (acc, item) => acc + item.price * item.quantity, 0
        );
        setSubTotal(total)
    }, [inCart])

    const handleRemove = (id: number) => {
        const updateCart = inCart.filter((item) => item.id !== id);
        setInCart(updateCart)
    }

    const handleQtyDecrement = (id: number) => {
        setInCart((prev) => (
            prev.map((item) => (
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            ))
        ))
    }

    const hanldeQtyIncrement = (id: number) => {
        setInCart((prev) => (
            prev.map((item) => (
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            ))
        ))
    }

    const AddCartItem = useCallback((id: number) => {
        setCartItems((prev) => [...prev, id])
    }, [])
    

    return (
        <>
            <div className="flex flex-col space-y-24 mt-[100px] w-[1600px]">
                <Header />
                <div className="flex flex-col items-center space-y-2">
                    <h1 className="-ml-[770px] font-bold text-lg">Products</h1>

                    {/* Items */}
                    <div className="flex space-x-12">
                        {PRODUCTS.map((item) => (
                            <div className="flex flex-col bg-yellow-50 p-4 items-start space-y-2 shadow-xl" key={item.id}>
                                <p className="font-medium">{item.name}</p>
                                <p>₹{item.price}</p>
                                <button className="bg-blue-500 px-2 py-2 rounded-md w-[150px]"
                                    onClick={() => AddCartItem(item.id)}
                                >
                                    Add To Cart
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Cart Summary */}
                    <div className="flex flex-col space-y-4 -ml-[490px] mt-4 font-bold text-lg text-gray-700">
                        <h1>Cart Summary</h1>
                        <div className="flex">
                            <div>Subtotal: </div>
                            <div>{subTotal}</div>
                        </div>
                        <p className="font-normal text-gray-400">Add ₹1000 more to get a Free Wirless Mouse!</p>
                    </div>
                    <div className="w-[900px] bg-gray-200 rounded-full h-2.5 ">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ "width": subTotal }}></div>
                    </div>
                </div>
            </div>

            {/* Cart Items */}
            <div className="mt-10 text-gray-400 flex flex-col  w-full">
                {cartItems.length > 0 ? (
                    <div className="ml-[370px] flex space-y-8 flex-col">
                        <h1 className="font-bold text-lg text-black">Cart Items</h1>
                        <div >
                            {inCart.map((item) => (
                                <div className="flex justify-between items-center p-4 shadow-sm bg-white w-[1000px]" key={item.id}>
                                    <div>
                                        <p className="text-md font-semibold text-gray-500">{item.name}</p>
                                        <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                                        <div className="flex items-center space-x-2 mt-4">
                                            <button className={` px-3 rounded-sm text-white ${item.quantity  <= 1 ? "bg-red-300 cursor-not-allowed" : "bg-red-500"}`}
                                                disabled={item.quantity <= 1}
                                                onClick={() => handleQtyDecrement(item.id)}
                                            >-</button>
                                            <p>{item.quantity}</p>
                                            <button className="bg-green-500 px-3 rounded-sm text-white"
                                                onClick={() => hanldeQtyIncrement(item.id)}
                                            >+</button>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            className="bg-red-500 px-2 py-2 rounded-md text-white"
                                            onClick={() => handleRemove(item.id)}
                                        >Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                            {subTotal >= 1000 && (
                                <div className="flex justify-between items-center p-4 shadow-sm bg-white w-[1000px]">
                                    <div>
                                        <p className="text-md font-semibold text-gray-500">Wireless Mouse</p>
                                    </div>
                                    <div>
                                        <div className="bg-green-300 px-2 py-2 rounded-md text-white">
                                            Free Gift
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center flex-col items-center">
                        <h1>Your Cart is empty</h1>
                        <p>Add some products to see them here!</p>
                    </div>
                )
                }
            </div >
        </>
    )
}

export default Home
