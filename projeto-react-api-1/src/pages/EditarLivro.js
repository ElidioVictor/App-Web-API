import styles from './EditarLivro.module.css'
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Input from '../components/form/Input';
import Select from '../components/form/Select';


function EditarLivro(params){

    const {id} = useParams();
    console.log(id); 
    const navigate = useNavigate();

    const [book, setBook] = useState({})
    const  [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/books/${id}`,{
            method: 'GET',
            headers: {
                'Content-type' : 'application/json'
            },
        })
        .then((resp)=>resp.json())
        .then((data)=>{setBook(data); console.log(data)})
        .catch((error)=>{console.log(error)})
    }, []);

    useEffect(()=>{
        fetch(
            'http://localhost:5000/categories',
            {
                method:'GET',
                headers:{
                    'Content-Type' : 'application/json'
                }
            }
        ).then(
            (res)=>
                res.json()
            
        ).then(
            (data) =>{
                setCategories(data);
                console.log(data);
            }
        )
        .catch(
            (error) =>{
                console.log(error);
            }
        )
    }, []);

    function handlerChangeBook(e){

        setBook({... book, [e.target.name] : e.target.value})
        //console.log(book) 
    };

    function handlerChangeCategory(e){

        setBook({... book, categories:{
            id : e.target.value,
            categories : e.target.options[e.target.selectedIndex].text
        }})
    };

    //erditar
    function editBook(book){
        fetch(`http://localhost:5000/books/${book.id}`,{
            method:'PATCH',
            headers:{
                'Content-Type' : 'application/json'
            },

            body: JSON.stringify(book)
        })
        .then(
            (resp)=>resp.json())

        .then(
            (data) =>{console.log(data)
            navigate('/livro', {state:'EDITOU MANO'})
            })
        .catch(
            (error) =>{console.log(error)
            
            })
    }

    function submit(e){
        e.preventDefault();
        editBook(book);
    }

    return(

        <div className={styles.book_container}>
            <h1>Edição ed livro</h1>

            <form onSubmit={submit}> 

                <Input 
                    handlerOnChange={handlerChangeBook}
                    type='text'
                    name='nome_livro'
                    id='nome_livro'
                    placeholder='Digite novo o titulo do livro'
                    text='Digite novo o titulo do livro'
                    value={book.nome_livro}
                />

                <Input 
                    handlerOnChange={handlerChangeBook}
                    type='text'
                    name='autor'
                    id='autor'
                    placeholder='Digite o novo nome do autor do livro'
                    text='Digite o novo nome do autor do livro'
                    value={book.autor}
                />

                <Input 
                    handlerOnChange={handlerChangeBook}
                    type='text'
                    name='descricao'
                    id='descricao'
                    placeholder='Faça um breve resumo do livro'
                    text='Escreva a descrição do livro'
                    value={book.descricao}
                />

                <Select
                    handlerOnChange={handlerChangeCategory}
                    name="categoria_id"
                    text="selecione a categoria do livro"
                    options={categories}
                />

                <p><input value='editar_livro' type='submit'/></p>

            </form>

        </div>
        
    )
}

export default EditarLivro;