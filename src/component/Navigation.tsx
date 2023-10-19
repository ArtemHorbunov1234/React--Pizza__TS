import { useState } from 'react';
import styles from './navigation.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setSort, setCategory } from '../redux/slices/filterSlice';
import { useRef } from 'react';
import { useEffect } from 'react';
import { RootState } from '../redux/store';
type List = {
    name: string;
    sortProperty: string;
};
// eslint-disable-next-line react-refresh/only-export-components
export const list: List[] = [
    { name: 'популярности', sortProperty: 'rating' },
    { name: 'ціна', sortProperty: 'price' },
    { name: 'алфавит', sortProperty: 'tittle' },
];

function Navigation() {
    const dispatch = useDispatch();
    const sort = useSelector((state: RootState) => state.filter.sort);
    const categoryId = useSelector((state: RootState) => state.filter.categoryId);
    const sortRef = useRef<HTMLUListElement>(null);

    const [isVisible, setIsVisible] = useState(false);

    const categories = ['Все', `М'ясні`, 'Вегетаріанська', 'Гриль', 'Гострі', 'Закриті'];
    const setCategoryId = (i: number) => {
        dispatch(setCategory(i));
    };
    const onClickIsItem = (obj: List) => {
        dispatch(setSort(obj));
        setIsVisible(!isVisible);
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
                setIsVisible(false);
                console.log('click');
            }
        };
        document.body.addEventListener('click', handleClickOutside);
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigation_left}>
                {categories.map((category, index) => (
                    <li key={index} id={categoryId === index ? 'active' : ''} onClick={() => setCategoryId(index)}>
                        {category}
                    </li>
                ))}
            </ul>
            <ul className={styles.navigation_right} ref={sortRef}>
                <img src='img/navigation_arrow.svg' alt='arrow' />
                <li>Сортування за:</li>
                <li>
                    <span onClick={() => setIsVisible(!isVisible)}>{sort.name}</span>
                </li>

                {isVisible ? (
                    <div className={styles['navigation_right--active']}>
                        {list.map((obj, index) => (
                            <li
                                id={sort.sortProperty === obj.sortProperty ? styles.active_selected : ''}
                                key={index}
                                onClick={() => onClickIsItem(obj)}
                            >
                                {obj.name}
                            </li>
                        ))}
                    </div>
                ) : null}
            </ul>
        </nav>
    );
}

export default Navigation;
