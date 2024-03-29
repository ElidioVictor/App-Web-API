import styles from './Livros.module.css'

function Livros (){

    return(
        <section className={styles.livro_container}>
            <h1>VEJA SEUS <span>LIVROS</span> AQUI MANO</h1>
        </section>
    );

};

export default Livros;