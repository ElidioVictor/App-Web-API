import { useLocation } from 'react-router-dom';
import styles from './Livros.module.css'
import Message from '../components/message/Message';


function Livros (){

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
        </section>
    );

};

export default Livros;