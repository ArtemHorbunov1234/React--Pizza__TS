import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../pages/fullPizza.module.scss';
import { Link } from 'react-router-dom';

function FullPizza() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pizza, setPizza] = useState<{
        name: string;
        ingredients: Array<null>;
        imgUrl: string;
        price: number;
    }>();

    useEffect(() => {
        async function fetchItems() {
            try {
                const { data } = await axios.get('https://6509be44f6553137159befd1.mockapi.io/items/' + id);
                setPizza(data);
            } catch (error) {
                alert(`Помилка під час отримання даних про піц, ${error}`);
                navigate('/');
            }
        }
        fetchItems();
    }, []);
    if (!pizza) {
        return 'Loading....';
    }
    const allIngredients = pizza.ingredients;
    console.log(allIngredients);
    return (
        <div className={styles.container}>
            <div className={styles.container__pizza}>
                <div className={styles['container--left']}>
                    <h1>{pizza.name}</h1>
                    <img src={`/${pizza.imgUrl}`} alt='pizza' />
                    <b>від {pizza.price} грн</b>
                    <Link to='/'>
                        <button className={styles.container__btn}>
                            <img src='/img/cart-exit_button.svg' alt='exit' />
                            Повернутися назад
                        </button>
                    </Link>
                </div>
                <div className={styles['container--right']}>
                    <div className={styles['container--right__header']}>
                        <h2>Інгредієнти</h2>
                        <b>{pizza.ingredients.length}</b>
                    </div>

                    <div className={styles['container--right__ingredients']}>
                        {pizza.ingredients.map((item, index) => (
                            <b key={index}>{item}</b>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FullPizza;
