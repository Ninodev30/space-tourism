import React, {useContext} from "react";
import {Context} from '../../Context';
import {Link} from 'react-router-dom';
import { HeaderContainer } from "./style";
import ImageStar from '../../../images/shared/logo.svg'
import ImageMenu from '../../../images/shared/icon-hamburger.svg';

const Header = () => {

    const [modal, setModal , subtitleEffect , setSubtitleEffect] = useContext(Context);

    const subTitle = (value , name) => {

        return(

            <h2 onClick={() => {setSubtitleEffect(value)}}
            style={subtitleEffect === value ? {
                borderBottom: "0.3vh solid white",
                paddingBottom:"3vh",
                marginTop:"3.3vh"
            } : {}}><p>0{value}</p>{name}</h2>

        )

    }

    return(

        <HeaderContainer>

            <img src={ImageStar} alt="star"></img>

            {/* Header mobile */}
            <img onClick={() => {setModal(true)}} src={ImageMenu} alt="Menu" className="header-mobile"></img>

            {/* Header tablet and desktop */}
            
            <nav>

                <Link to="/" className="link">
                    {subTitle(0, "home")}
                </Link>

                <Link to="/Destination" className="link">
                    {subTitle(1, "destination")}
                </Link>

                <Link to="/Crew" className="link">
                    {subTitle(2, "crew")}
                </Link>

                <Link to="/Technology" className="link">
                    {subTitle(3, "technology")}   
                </Link>

            </nav>

        </HeaderContainer>

    )

}

export default Header;