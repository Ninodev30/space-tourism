import React, { useContext } from "react";
import { Context } from './Context';
import { ModalContainer } from "../styles/ModalStyles";
import IconClose from '../images/shared/icon-close.svg';

const Modal = () => {

    const [modal, setModal] = useContext(Context);

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

                        <h2><p>00</p>Home</h2>
                        <h2><p>01</p>Destination</h2>
                        <h2><p>02</p>Crew</h2>
                        <h2><p>03</p>Technology</h2>

                    </div>

                </section>

            </ModalContainer>

        )

    }

}

export default Modal;