import styles from './Section1.module.css'
import persona01 from '../images/persona01.png'

export function Section1(){
    return(
        <section className={styles.section}>
            <div className='interface'>
                <div className={styles.infor}>
                    <div className={styles.text}>
                        <p className={styles.p}>Rápido, confiável, inovador! 
                        Descubra o poder da Assist Ti</p>
                    </div>

                    <div className={styles.persona1}>
                        <img className={styles.img} src={persona01}/>
                    </div>
                </div>
            </div>
        </section>
    )
}