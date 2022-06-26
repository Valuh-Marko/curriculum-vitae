import React, { useEffect } from 'react'
import { ModalStyles } from './Modal.styles'
import close from "../../images/close.svg"
import { motion } from 'framer-motion';

export const Modal = ({children, handleClose}) => {

  useEffect(() => {
    const bodyElement = document.querySelector('body');
    bodyElement.style.overflow = 'hidden';

    return () => {
      bodyElement.style.overflow = 'visible';
    }
  }, [])

  return (
    <ModalStyles>
        <motion.div 
          className="c-modal__backdrop"
          onClick={() => handleClose()}

          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.4}}
          exit={{opacity: 0}}
          >
          <motion.div 
          className="c-modal__content-wrapper"
          onClick={(e) => e.stopPropagation()}
          >
            <div className="c-modal-close" onClick={() => handleClose()}>
              <img src={close} alt="closeBtn" fill="white" />
            </div>
            <motion.div className="c-modal__content">
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
    </ModalStyles>
  )
}
