import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../components/Container'
import styles from './Livros.module.css'
import Message from '../components/message/Message';
import CardBook from '../components/cardbook/CardBook';


function Livros (){

    const [bookMessage, setBookMessage] = useState([])

    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/listagemLivros',{
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-type' : 'application/json',
                'Acess-Control-Allow-Origin' : '*',
                'Acess-Control-Allow-Headers' : '*'
            },
        })
        .then((resp)=>resp.json())
        .then((data)=>{setBooks(data.data); console.log(data)})
        .catch((error)=>{console.log(error)})
    }, []);

    const remove = (id) =>{
        fetch(`http://localhost:5000/excluirLivro/${id}`,{
            method : 'DELETE',
            headers: {
                'content-type':'application/json'
        }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setBooks(books.filter((book_data)=> book_data.id_livro !== id ))
            setBookMessage('PARABÉNS OBJETO)')
        })
        .catch((err) => {console.log(err)})
    };

    const location = useLocation();
    let message =''
    console.log('location state: ' + location.state);

    if(location.state){
        message = location.state;
    };

    return(
        <section className={styles.livro_container}>
            <h1>VEJA SEUS <span>LIVROS</span> AQUI MEU MANO</h1>
            {
                message && <Message
                                msg={message}
                                type='sucess'
                            />
            }
            
            {
                bookMessage && <Message
                                msg={bookMessage}
                                type='sucess'
                            />
            }

            {
                books.map((book)=>(
                <CardBook
                    id={book.cod_livro}
                    livro={book.nome_livro}
                    autor={book.autor_livro}
                    //category={book.categories.categories}
                    key={book.cod_livro}
                    handlerRemove={remove}
                />

                ))
            }


            {/* </Container> */}
        </section>
    );

};

export default Livros;