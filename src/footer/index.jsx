import React from 'react'
import styles from './styles.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
         <span className={styles.label}>Label1</span>
        <span>Value1</span>
      </div>
      <div>
        <div className={styles.rightBottom}>
            <div>
                <span className={styles.label}>Label</span>
                <span style={{border:'1px solid black',padding:"2px 8px",marginRight:"8px"}}>Value</span>
            </div>
            <div>
                 <span className={styles.label}>Labe2</span>
                <span style={{border:'1px solid black',padding:"2px 8px",marginRight:"8px"}}>Value2</span>
            </div>
        </div>
        <div>
             <span className={styles.label}>Label right bottom</span>
            <span>Value3</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
