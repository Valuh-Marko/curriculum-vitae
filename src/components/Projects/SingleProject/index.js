import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { Button } from '../../Button';
import { Modal } from '../../Modal';

import { SingleProjectWrapper } from './SingleProjectWrapper.styled';
import "./styles.scss"

export const SingleProject = ({name, desc, workflow, thumbnail, video, github}) => {

  const [modalOpen, setModalOpen] = useState(false);

  const openModalHandler = () => setModalOpen(true);
  const closeModalHandler = () => setModalOpen(false);

  return (
    <div>
      <SingleProjectWrapper background={thumbnail} onClick={openModalHandler}>
        <h3 className="c-project-title heading">{name}</h3>
        <p className="c-project-desc">{desc}</p>
        <Button text={'Find out more'} customClass={'c-project-cta'} />
      </SingleProjectWrapper>
      <AnimatePresence>
      {modalOpen && 
          <Modal modalOpen={modalOpen} handleClose={closeModalHandler} >
            <div className="c-project-video__overlay"></div>
            <video className='c-project-video'  src={video} autoPlay loop></video>
            <div className="c-project-modal-content">
              <h2 className="c-modal__title">{name}</h2>
              <p className="c-modal__desc">{desc}</p>
              <ul className="c-modal__workflow-list">
                {workflow.map((step) => (
                  <li>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </Modal>
      }
      </AnimatePresence>
    </div>
  )
}
