import { useSelector } from 'react-redux';
import { CartCard } from '../components';
import { useTitle } from '../hooks/useTitle';

export const Cart = () => {
  const cartList = useSelector(state => state.cartState.cartList);
  const total = useSelector(state => state.cartState.total);

  useTitle('Cart');

  const handlePayment = () => {
    window.location.href = "https://razorpay.me/@amanyadav38";
  };

  return (
    <main>
      <section className="cart">
        <h3>Subtotal: ₹ {total}</h3>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
        <div className="cart-footer">
          <p className="developer-note">Your support helps keep this project alive!</p>
          <button className='button-buy' onClick={handlePayment}>
            Help Developer ❤️
          </button>
        </div>
      </section>
    </main>
  );
};
