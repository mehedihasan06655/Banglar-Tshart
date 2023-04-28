
const Cart = ({cart, hanldeRemoveFromCart}) => {
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button
                    onClick={()=> hanldeRemoveFromCart(tshirt._id)}
                >X</button></p>)
            }
        </div>
    );
};

export default Cart;