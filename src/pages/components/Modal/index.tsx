import React, { useContext } from "react";
import { Context } from '../../Context.jsx';
import {Link} from 'react-router-dom';
import { ModalContainer } from "./style";
import IconClose from '../../../images/shared/icon-close.svg';

const Modal = () => {

    const [modal, setModal , subtitleEffect , setSubtitleEffect] = useContext(Context);

    const hideModal = () => {
        setModal(false);
    }

    const clickOutModal = (event:any) => {
        const rootContainer = document.getElementById("root");
        const modalContainer = document.getElementById("modal-container");
        if(event.target === modalContainer && event.target.parentNode === rootContainer) hideModal();
    }

    if (modal === true) {
        return (
            <ModalContainer id="modal-container" onMouseUp={clickOutModal}>
                <section>

                    <img onClick={hideModal} src={IconClose} alt="X"></img>

                    <div>

                        <Link to="/" className="link"
                            onClick={() => {
                                setSubtitleEffect(0);
                                hideModal();
                            }}
                            ><p>00</p>Home
                        </Link>
                            
                        <Link to="/Destination" className="link"
                            onClick={() => {
                                setSubtitleEffect(1);
                                hideModal();
                            }}
                            ><p>01</p>Destination                         
                        </Link>
                            
                        <Link to="/Crew" className="link"
                            onClick={() => {
                                setSubtitleEffect(2);
                                hideModal();
                            }}
                            ><p>02</p>Crew
                        </Link>

                        <Link to="/Technology" className="link"
                            onClick={() => {
                                setSubtitleEffect(3);
                                hideModal();
                            }}
                            ><p>03</p>Technology
                        </Link>

                    </div>

                </section>
            </ModalContainer>
        )
    }

}

export default Modal;