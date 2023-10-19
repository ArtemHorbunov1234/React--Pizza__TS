import ContentLoader from 'react-content-loader';
import styles from './skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    speed?: number;
    width?: number;
    height?: number;
    viewBox?: string;
    backgroundColor?: string;
    foregroundColor?: string;
}
const Skeleton: React.FC<SkeletonProps> = (props) => (
    <ContentLoader
        className={styles.skeleton}
        speed={2}
        width={280}
        height={432}
        viewBox='0 0 280 432'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
        {...props}
    >
        <rect x='165' y='101' rx='0' ry='0' width='1' height='0' />
        <rect x='218' y='89' rx='0' ry='0' width='0' height='1' />
        <rect x='159' y='115' rx='0' ry='0' width='0' height='1' />
        <rect x='210' y='109' rx='0' ry='0' width='1' height='1' />
        <rect x='295' y='123' rx='0' ry='0' width='0' height='1' />
        <rect x='135' y='151' rx='0' ry='0' width='0' height='1' />
        <circle cx='136' cy='136' r='136' />
        <rect x='0' y='282' rx='0' ry='0' width='280' height='24' />
        <rect x='0' y='321' rx='10' ry='10' width='280' height='54' />
        <rect x='0' y='393' rx='0' ry='0' width='55' height='23' />
        <rect x='225' y='392' rx='15' ry='15' width='55' height='23' />
    </ContentLoader>
);

export default Skeleton;
