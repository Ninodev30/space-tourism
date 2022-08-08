import React, { useContext } from "react";
import {Context} from './Context';
import { HeaderContainer } from "../styles/HeaderStyles";
import ImageStar from '../images/shared/logo.svg'
import ImageMenu from '../images/shared/icon-hamburger.svg';

const Header = () => {

    const [modal , setModal] = useContext(Context);

    return(

        <HeaderContainer>

            <img src={ImageStar} alt="Star"></img>
            <img onClick={() => {setModal(true)}} src={ImageMenu} alt="Menu"></img>

        </HeaderContainer>

    )

}

export default Header;