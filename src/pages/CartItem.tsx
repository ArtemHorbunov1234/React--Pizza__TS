import styles from '../pages/cart.module.scss';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import { ItemsType } from './Cart';

function CartItem({ id, name, price, count, imgUrl, types, size }: ItemsType) {
    const dispatch = useDispatch();

    const onClickPlus = () => {
        dispatch(
            addItem({
                id,
            })
        );
    };
    const onClickMinus = () => {
        dispatch(
            minusItem({
                id,
            })
        );
    };

    const onClickRemove = () => {
        dispatch(
            removeItem({
                id,
            })
        );
    };

    return (
        <div className={styles['cart--items']}>
            <Link to={`/pizza/${id}`}>
                <div className={styles.cart__item}>
                    <img src={imgUrl} alt='' />
                    <div>
                        <h1>{name}</h1>
                        <h2>
                            {types}, {size} см.
                        </h2>
                    </div>
                </div>
            </Link>

            <div className={styles.cart__main}>
                <div>
                    <img onClick={onClickMinus} src='img/cart-minus.svg' alt='minus' />
                    <b>{count}</b>
                    <img onClick={onClickPlus} src='img/cart-plus.svg' alt='plus' />
                </div>
                <b>{price * count} грн</b>
                <img onClick={onClickRemove} src='img/cart-delete.svg' alt='delete' />
            </div>
        </div>
    );
}

export default CartItem;
