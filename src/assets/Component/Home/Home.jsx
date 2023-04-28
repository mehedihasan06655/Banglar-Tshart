import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import { useState } from 'react';
import toast from 'react-hot-toast';

const Home = () => {
    const tShirts = useLoaderData();
    const [cart,setCart] = useState([])



    const handleAddToCart = tshirt =>{
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists){
            toast('You Already add it!!')
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }

    const hanldeRemoveFromCart = id =>{
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }

    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tShirts.map((tShirt, indx)  => <TShirt 
                    key={indx} 
                    tShirt={tShirt}
                    handleAddToCart={handleAddToCart}
                    />)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    hanldeRemoveFromCart={hanldeRemoveFromCart}
                />
            </div>
        </div>
    );
};

export default Home;