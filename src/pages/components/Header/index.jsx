import React, { useContext } from "react";
import {Context} from '../../Context';
import {Link} from 'react-router-dom';
import { HeaderContainer } from "./style";
import ImageStar from '../../../images/shared/logo.svg'
import ImageMenu from '../../../images/shared/icon-hamburger.svg';

const Header = () => {

    const [modal, setModal , background , setBackground] = useContext(Context);

    return(

        <HeaderContainer>

            <img src={ImageStar} alt="star"></img>

            {/* Header mobile */}
            <img onClick={() => {setModal(true)}} src={ImageMenu} alt="Menu" className="header-mobile"></img>

            {/* Header tablet and desktop */}
            
            <nav>

                <Link to="/" className="link"><h2 onClick={() => {setBackground(0)}}>home</h2></Link>
                <Link to="Destination" className="link"><h2 onClick={() => {setBackground(1)}}>destination</h2></Link>
                <Link to="Crew" className="link"><h2 onClick={() => {setBackground(2)}}>crew</h2></Link>
                <Link to="Technology" className="link"><h2 onClick={() => {setBackground(3)}}>technology</h2></Link>

            </nav>

        </HeaderContainer>

    )

}

export default Header;