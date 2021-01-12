import React, {useEffect} from 'react';
const Modal = ({ modalContent, closeModal}) =>{
    
    //closeModal is a function that close the alert
    useEffect(() => {
        setTimeout(() => {
            closeModal();
        }, 5000);
    });

    return(
        <div className='modal'>
            <p>{modalContent}</p>
        </div>
    )
}

export default Modal;