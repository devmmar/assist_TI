import styles from './Section3.module.css';
import { FaCheckCircle } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import firewall from '../images/firewall.png'

export function Section3() {
    return (
        <section className={styles.section3}>
            <div className='interface'>
                <div className={styles.dimen}>
                    <div className={styles.infor}>
                        <h1>
                            Implementação de Firewall SonicWall
                        </h1>
                        <ul className={styles.custom_list}>
                            <li><span className={styles.icon} ><FaCheckCircle /></span>Planejamento e instalação profissional de dispositivos SonicWall para segurança de rede;</li>
                            <li><span className={styles.icon} ><FaCheckCircle /></span>Definição de políticas de segurança;</li>
                            <li><span className={styles.icon} ><FaCheckCircle /></span>Configuração de VPN para fornecer uma conexão segura entre locais ou para usuários remotos;</li>
                            <li><span className={styles.icon} ><FaCheckCircle /></span>Monitoramento e manutenção de túneis VPN para garantir a integridade da conexão;</li>
                        </ul>

                        <a href="#" className={styles.button_chat}><button><FaWhatsapp className={styles.icon_2}/> Fale com um especialista</button></a>
                    </div>

                    <div className={styles.image}>
                        <img src={firewall} />
                    </div>
                </div>
            </div>
        </section>

    )
}