import styles from './Section2.module.css'

export function Section2() {
    return (

        <section className={styles.section2}>
            <div className='interface'>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h1>Segurança Cibernética:</h1>
                        <p>Serviços de recuperação de dados em caso de perda devido a falhas de hardware, exclusão acidental, entre outros.</p>
                    </div>
                    <div className={styles.card}>
                        <h1>Recuperação de Dados:</h1>
                        <p>Serviços de recuperação de dados em caso de perda devido a falhas de hardware, exclusão acidental, entre outros.</p>
                    </div>
                    <div className={styles.card}>
                        <h1 className={styles.atual}>Atualizações e Migrações de Software:</h1>
                        <p>Atualizações regulares de software para garantir o uso das últimas versões e recursos.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}