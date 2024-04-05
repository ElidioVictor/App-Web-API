import Input from '../components/form/Input';
import Select from '../components/form/Select';
import styles from './NovoLivro.module.css';
import { useState, useEffect } from 'react';


function NovoLivro (){

    const  [categories, setCategories] = useState([]);

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
    }, [])

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

                <Input 
                    type='text'
                    name='autor'
                    id='autor'
                    placeholder='Digite o nome do autor do livro'
                    text='Digite o nome do autor do livro'
                />

                <Input 
                    type='text'
                    name='descricao'
                    id='descricao'
                    placeholder='Faça um breve resumo do livro'
                    text='Escreva a descrição do livro'
                />

                <Select
                    name="categoria_id"
                    text="selecione a categoria do livro"
                    options={categories}
                />

                
            </form>
        </section>
    );

};

export default NovoLivro;