import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = () => {

  const dispatch =useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  const addCart = useSelector(state => state.cart.totalQuantiy)

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{addCart}</span>
    </button>
  );
};

export default CartButton;
