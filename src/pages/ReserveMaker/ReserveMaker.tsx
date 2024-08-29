import Search from '@/components/Search/Search';
import styles from './index.module.scss';
import Suggestions from '@/components/Suggestions/Suggestions';

export default function ReserveMaker() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title_container}>
                    <h2>Make a Reserve! 🙌</h2>
                    <p>Search the restaurant, follow suggestions and make the reserve! easy steps... 😊</p>
                </div>
                <div className={styles.search_container}>
                    <Search/>
                </div>
                <div className={styles.suggestions_container}>
                    <Suggestions/>
                </div>
                <div className={styles.restaurant_list}>
                    
                </div>
            </div>
        </>
    )
}