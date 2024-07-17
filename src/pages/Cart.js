import { useSelector } from 'react-redux';
import { CartCard } from '../components';
import { useTitle } from '../hooks/useTitle';

export const Cart = () => {
  const cartList = useSelector(state => state.cartState.cartList);
  const total = useSelector(state => state.cartState.total);


  useTitle('Cart');

  return (
    <main>
      <section className="cart">
        <h3>Subtotal: ₹ {total}</h3>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
        <button className='button-buy'>
          Proceed To Buy {cartList.length} item
        </button>
      </section>
    </main>
  );
};
