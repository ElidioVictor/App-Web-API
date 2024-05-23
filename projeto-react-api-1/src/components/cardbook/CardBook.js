import styles from './CardBook.module.css'
import { Link } from 'react-router-dom';

function CardBook ({id, livro, autor, category, handlerRemove}){

    const remove  = (e) =>{
        e.preventDefault();
        handlerRemove(id);
    }

    return(

        <div className={styles.book_card}>
            <h4>{livro}</h4>
            <p> Autor: {autor}</p> 
            
            <p className={styles.category_text}>
                <span/>Categoria: {category}
            </p>

            <div className={styles.book_card_actions}>
                <Link to={`/EditarLivro/${id}`} >Editar</Link>
                <button onClick={remove}>Excluir</button>
            </div>

        </div>

    )

}

export default CardBook;