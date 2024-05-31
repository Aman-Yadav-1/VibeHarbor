import './CartCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { remove } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

export const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, img } = product;

  return (
    <div className="cartCard">
      <img src={img} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">₹ {price}</p>
      <button onClick={() => dispatch(remove(product))}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};
