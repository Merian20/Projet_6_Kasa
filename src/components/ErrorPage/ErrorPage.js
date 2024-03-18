import './errorpage.scss';
import Header from './../Header/header';
import Footer from './../Footer/Footer';

function ErrorPage () {
    return (
        <>
        <Header />
        <div className='container-404'>
            <h1 className='error'>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <a href='/'>Retourner sur la page d'accueil</a>
        </div>
        <Footer />
        </>
    )
}

export default ErrorPage