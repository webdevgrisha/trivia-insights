import styles from './NoData.module.css'

function NoData() {
    return (<div className={styles.empty}>Нет данных для отображения</div>);
}

export {
    NoData
}