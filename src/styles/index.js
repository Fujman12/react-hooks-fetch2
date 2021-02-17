import styled from 'styled-components';

export const AllItems = styled.ul`
  height: calc(100vh - 150px);
  overflow-y: auto;
  width: 43%;
  margin: 20px auto 0 auto;
  padding: 0;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`


export const ListItem = styled.li`
  margin: 7px auto;
  width: 350px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 0.5rem;
`

export const TextContent = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;

  > p {
    font-size: 2em;
    font-weight: 300;
  }
`

export const MainContainer = styled.div`
  height: 100%;
  width: 100vw;
  background-color: rgb(240, 240, 240);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > div {
    height: 50%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
  }
`
