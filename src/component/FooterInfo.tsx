import styles from '../component/footerInfo.module.scss';

function FooterInfo() {
    return (
        <footer>
            <div className={styles.footer_info}>
                <div className={styles['footer--left']}>
                    <div>
                        <h1>Користувачу</h1>
                        <p>Про нас</p>
                        <p>Оплата та доставка</p>
                        <p>Політика безпеки</p>
                        <p>Умови угоди</p>
                    </div>
                    <div>
                        <h1>Відгуки</h1>
                        <p>Відгуки про магазин</p>
                        <p>Відгуки про товар</p>
                    </div>
                </div>

                <img
                    onClick={() => window.scrollTo(0, 0)}
                    src='img/pizza-logo.png'
                    alt='pizza'
                    title='Натисніть, щоб вернутися на головну сторінку'
                />

                <div className={styles['footer--right']}>
                    <div>
                        <h1>Контактна інформація</h1>
                        <a title='Натисніть, щоб подзвонити нам' href='tel:+380633444477'>
                            + 38 (063) 344 44 77
                        </a>
                        <a title='Натисніть, щоб написати нам емейл' href='mailto:react-pizza@ukr.net'>
                            react-pizza@ukr.net
                        </a>
                        <p>Пн-нд з 10:00 по 20:00</p>
                    </div>
                    <div>
                        <a
                            target='_blank'
                            href='https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A7%D0%BA%D0%B0%D0%BB%D0%BE%D0%B2%D0%B0,+9%D0%B1,+%D0%91%D1%80%D0%BE%D0%B2%D0%B0%D1%80%D1%8B,+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+07400/@50.5108387,30.8351805,20z/data=!4m9!1m2!2m1!1z0YLQvtGA0LPQvNCw0Ygg0LHRgNC-0LLQsNGA0Ys!3m5!1s0x40d4d949d79c0001:0x56d0717cbe685cc7!8m2!3d50.5108477!4d30.8352022!16s%2Fg%2F11rd28wdjx?entry=ttu'
                        >
                            <img
                                title='Натисніть, щоб відкрити Google Карти'
                                src='img/footer--google_map.png'
                                alt='google-Maps'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterInfo;
