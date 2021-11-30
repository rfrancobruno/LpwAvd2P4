import styled from 'styled-components';

export const Container = styled.header`
  background: white;
`

export const Content = styled.div`
  max-width: 400px;
  margin: 0 auto;

  padding: 1rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border: 0;
    padding: 0 12rem;
    border-radius: 0.25rem;
    height: 3rem;
    margin: 0 auto;
    
    display: flex;
    align-items: center;
    
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.7);
    }
  }
`
