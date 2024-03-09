import logo_nb from './../../assets/logo_nb.png'
import './footer.scss'

function Footer () {
    return <footer>
                <div className='footer'>
                    <div className='container-footer'>
                        <img src={logo_nb} alt="logo de kasa"></img>
                        <p>© 2020 Kasa. All rights reserved</p>
                    </div>
                </div>
            </footer>
}
export default Footer