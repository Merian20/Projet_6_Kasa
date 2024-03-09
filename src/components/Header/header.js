import logo from './../../assets/logo.png'
import './header.scss'

function Header() {
    return <div className='header'>
                <img src={logo} alt="logo de kasa"></img>
                    <nav className='navigation'>
                        <a href="/">Accueil</a>
                        <a href="./../APropos">A propos</a>
                    </nav> 
            </div>
}

export default Header