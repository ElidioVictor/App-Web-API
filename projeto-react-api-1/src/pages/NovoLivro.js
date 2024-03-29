import Input from '../components/form/Input';
import styles from './NovoLivro.module.css';


function NovoLivro (){

    return(
        <section className={styles.novo_livro_container}>
            <h1><span>Cadastro</span> de livros</h1>
            <form>
                <Input 
                    type='text'
                    name='nome_livro'
                    id='nome_livro'
                    placeholder='Digite o titulo do livro'
                    text='Digite o titulo do livro'
                />
            </form>
        </section>
    );

};

export default NovoLivro;