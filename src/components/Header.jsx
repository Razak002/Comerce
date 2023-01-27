import Logo from '../Assests/img/Logo.png'
import { faSearch, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header = () => {
    return (
        <div className='header'>
            <div className='socials'>
                <b>Follow.Fb./Tw./In.</b>
            </div>
            <div className='logo'>
                <img src={Logo} alt='logo' />
            </div>
            <div className='price'>
                <b> <i>$239.00</i></b>
                <br />
                <FontAwesomeIcon icon={faSearch} />
                <FontAwesomeIcon icon={faLock} />

            </div>
        </div>

    )

}

