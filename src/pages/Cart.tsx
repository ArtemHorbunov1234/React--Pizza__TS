import styles from '../pages/cart.module.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearItem } from '../redux/slices/cartSlice';
import { RootState } from '../redux/store';

export type ItemsType = {
    name: string;
    price: number;
    imgUrl: string;
    types: number;
    id: string;
    count: number;
    size: number;
};
function Cart() {
    const { totalPrice, items } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const onClickClear = () => {
        dispatch(clearItem());
    };

    const totalCounter = items.reduce((sum, item) => sum + item.count, 0);

    return (
        <>
            {items.length > 0 ? (
                <div className={styles.cart}>
                    <div className={styles['cart--header']}>
                        <div>
                            <img className={styles.cart__shopping} src='img/cart-icon.svg' alt='cart' />
                            <h1>Кошик</h1>
                        </div>
                        <div onClick={onClickClear} className={styles['cart--clear__img']}>
                            <img src='img/cart-icon_2.svg' alt='dumpster' />
                            <h2>Очистити кошик</h2>
                        </div>
                    </div>

                    {items.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}

                    <div className={styles['cart--amount']}>
                        <h1>
                            Усього піц:
                            <b> {totalCounter} шт</b>
                        </h1>
                        <h1>
                            Сума замовлення: <span>{totalPrice} грн</span>
                        </h1>
                    </div>
                    <div className={styles['cart--footer']}>
                        <Link to='/'>
                            <button className={styles['cart--footer__exit']}>
                                <img src='img/cart-exit_button.svg' alt='exit' />
                                Повернутися назад
                            </button>
                        </Link>

                        <button className={styles['cart--footer__pay']}>Оплатити зараз</button>
                    </div>
                </div>
            ) : (
                <div className={styles.cart_container}>
                    <div>
                        <h1>Кошик порожній</h1>
                        <img src='img/cart-smile.svg' alt='smile' />
                    </div>
                    <p>
                        Скоріш за все, ви не замовляли ще піцу. Для того, щоб замовити піцу, перейди на головну
                        сторінку.
                    </p>
                    <img src='img/cart-shopping.png' alt='shopping' />
                    <Link to='/'>
                        <button>Повернутися назад</button>
                    </Link>
                </div>
            )}
        </>
    );
}

export default Cart;
