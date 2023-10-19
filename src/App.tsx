import Header from './component/Header';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { setFilters } from './redux/slices/filterSlice';
import { list } from './component/Navigation';
import { useRef } from 'react';
import { fetchPizzas } from './redux/slices/pizzasSlice';
import FullPizza from './pages/FullPizza';
import { RootState } from './redux/store';

function App() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { currentPage, categoryId, searchItem, sort } = useSelector((state: RootState) => state.filter);
    const isSearch = useRef(false);
    const isMounted = useRef(false);
    const search = searchItem ? `&search=${searchItem}` : '';
    const category = categoryId > 0 ? `&category=${categoryId}` : '';

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));

            const sort = list.find((obj) => obj.sortProperty === params.sortProperty);
            dispatch(
                setFilters({
                    ...params,
                    sort,
                })
            );
            isSearch.current = true;
        }
    }, [dispatch]);

    const getPizzas = () => {
        async function fetchDate() {
            try {
                dispatch(
                    fetchPizzas({
                        search,
                        category,
                        sort,
                        currentPage,
                    })
                );
            } catch (error) {
                alert('Помилка під час отримання піц ');
                console.log('ERROR', error);
            }
        }
        window.scrollTo(0, 0);
        fetchDate();
    };

    useEffect(() => {
        if (!isSearch.current || window.location.search === '?sortProperty=rating&categoryId=0&currentPage=1') {
            getPizzas();
        }
        isSearch.current = false;
    }, [category, search, currentPage, sort.sortProperty]);

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
                currentPage,
            });
            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [categoryId, currentPage, sort.sortProperty]);
    return (
        <div className='content'>
            <Header />
            <hr />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Cart' element={<Cart />} />
                <Route path='/pizza/:id' element={<FullPizza />} />
            </Routes>
        </div>
    );
}

export default App;
