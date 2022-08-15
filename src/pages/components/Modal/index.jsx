import React, { useContext } from "react";
import { Context } from '../../Context';
import {Link} from 'react-router-dom';
import { ModalContainer } from "./style";
import IconClose from '../../../images/shared/icon-close.svg';

const Modal = () => {

    const [modal, setModal , subtitleEffect , setSubtitleEffect] = useContext(Context);

    const hideModal = () => {
        setModal(false);
    }

    window.addEventListener('mouseup', (event) => {

        const app = document.getElementsByClassName("App")[0];
        const modalDiv = document.getElementsByClassName("modal-container")[0];
        
        if (event.target === modalDiv && event.target.parentNode === app) {
            hideModal();
        }

    })

    if (modal === true) {

        return (

            <ModalContainer className="modal-container">

                <section>

                    <img onClick={hideModal} src={IconClose} alt="X"></img>

                    <div>

                        <h2 onClick={() => {
                            setSubtitleEffect(0);
                            hideModal();
                        }}><Link to="/" className="link"><p>00</p>Home</Link></h2>
                        <h2 onClick={() => {
                            setSubtitleEffect(1);
                            hideModal();
                        }}><Link to="/Destination" className="link"><p>01</p>Destination</Link></h2>
                        <h2 onClick={() => {
                            setSubtitleEffect(2);
                            hideModal();
                        }}><Link to="/Crew" className="link"><p>02</p>Crew</Link></h2>
                        <h2 onClick={() => {
                            setSubtitleEffect(3);
                            hideModal();
                        }}><Link to="/Technology" className="link"><p>03</p>Technology</Link></h2>

                    </div>

                </section>

            </ModalContainer>

        )

    }

}

export default Modal;