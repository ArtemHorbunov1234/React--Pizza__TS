import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
function Header() {
    const { items, totalPrice } = useSelector((state: RootState) => state.cart);
    const totalCounter = items.reduce((sum: number, item) => sum + item.count, 0);
    return (
        <div className={styles.header}>
            <Link to=''>
                <div className={styles.header_left}>
                    <img src='/img/pizza-logo.png' width={38} height={38} alt='' />
                    <div>
                        <h1>REACT PIZZA</h1>
                        <p>найсмачніша піца у всесвіті</p>
                    </div>
                </div>
            </Link>
            <Link to='/Cart'>
                <div className={styles.header_right}>
                    <b>{totalPrice} грн</b>
                    <img src='/img/line-right.svg' alt='line' />
                    <img src='/img/cart-right.svg' alt='cart' />
                    <b>{totalCounter}</b>
                </div>
            </Link>
        </div>
    );
}

export default Header;
