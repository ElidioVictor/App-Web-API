import styles from './CardBook.module.css'

function CardBook ({id, livro, autor, category, handlerRemove}){

    const remove  = (e) =>{
        e.preventDefault();
        handlerRemove(id);
    }

    return(

        <div className={styles.book_card}>
            <h4>{livro}</h4>
            <p> Autor: </p> {autor}
            
            <p className={styles.category_text}>
                <span/>Categoria: {category}
            </p>

            <div className={styles.book_card_actions}>
                <button onClick={remove}>Excluir</button>
            </div>

        </div>

    )

}

export default CardBook;