import styled from "styled-components";

export const ModalStyles = styled.div`
    .c-modal__backdrop {
        background-color: rgba(0,0,0,.85);
        backdrop-filter: blur(4px);
        position: fixed;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .c-modal__content-wrapper {
        background-color: rgba(255,255,255,.6);
        border-radius: 20px;
        backdrop-filter: blur(10px);
        width: 65vw;
        height: 80vh;
    }

    .c-modal-close {
        position: absolute;
        top: 2rem;
        right: 4rem;
        z-index: 20;
        opacity: .8;
        cursor: pointer;
    }
`;