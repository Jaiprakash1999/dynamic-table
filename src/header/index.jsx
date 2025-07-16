import styles from './styles.module.css'

const Header=()=>{
    return(
    <div className={styles.header}>
        <div className={styles.topLeftItem}>
          <div className={styles.headerItem}>
            <span className={styles.label}>top left label 1</span>
            <span>15.07.2025</span>
          </div>
          <div className={styles.headerItem}>
            <span className={styles.label}>top left label 2</span>
            <span>1</span>
          </div>
          <div className={styles.headerItem}>
            <span className={styles.label}>top left label 3</span>
            <span>15.07.2025</span>
          </div>
        </div>

        <div className={styles.topRightItem}>
          <div className={styles.headerItem}>
            <span className={styles.label}>top right label 1</span>
            <span>15072025</span>
          </div>
          <div className={styles.headerItem}>
            <span className={styles.label}>top right label 2</span>
            <span>1</span>
          </div>
        </div>
    </div>
    )
}

export default Header;