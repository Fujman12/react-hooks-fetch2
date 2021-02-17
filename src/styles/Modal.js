import styled from 'styled-components'

export const ModalShadow = styled.div`
  background-color: rgb(0, 0, 0, 0.5);
  height: 100%;
  width: 100vw;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  > div {
    background-color: rgb(240, 240, 240);
    width: 60%;
    padding: 2%;
    border-radius: 0.5rem;
    > form {
      display: flex;
      flex-direction: column;
      > div {
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
`
