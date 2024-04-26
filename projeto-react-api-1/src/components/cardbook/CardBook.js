import styles from './CardBook.module.css'

function CardBook ({id, livro, autor, category}){

    return(

        <div className={styles.book_card}>
            <h4>{livro}</h4>
            <p> Autor: </p> {autor}
            
            <p className={styles.category_text}>
                <span/>Categoria: {category}
            </p>
        </div>

    )

}

export default CardBook;