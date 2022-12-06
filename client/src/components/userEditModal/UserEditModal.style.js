import styled from 'styled-components';

const Container = styled.div`
  width: 30rem;
  height: 30rem;
  position: absolute;
  top: 22vh;
`;

const Formbox = styled.form`
  width: 30rem;
  height: 30rem;
  background-color: beige;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
`;

const NicknameInput = styled.input`
  width: 20rem;
`;

const AboutInput = styled.input`
  width: 20rem;
  height: 20rem;
`;

const SubmitButton = styled.button`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 0.4rem;
  width: 5rem;
`;

export { Container, Formbox, NicknameInput, AboutInput, SubmitButton };
