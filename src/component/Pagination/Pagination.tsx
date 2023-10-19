import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';
import { setCurrentPage } from '../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';

function Pagination() {
    const dispatch = useDispatch();
    const onPageChange = (event: { selected: number }) => {
        dispatch(setCurrentPage(event.selected + 1));
    };
    return (
        <div>
            <ReactPaginate
                className={styles.root}
                breakLabel='...'
                nextLabel='>'
                onPageChange={onPageChange}
                pageRangeDisplayed={4}
                pageCount={3}
                previousLabel='<'
                renderOnZeroPageCount={null}
            ></ReactPaginate>
        </div>
    );
}

export default Pagination;
