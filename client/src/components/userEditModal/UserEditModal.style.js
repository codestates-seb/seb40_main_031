import styled from 'styled-components';

const Container = styled.div`
  width: 30rem;
  height: 30rem;
  position: absolute;
  top: 22vh;
  z-index: 10;
`;

const Formbox = styled.form`
  width: 30rem;
  height: 30rem;
  background-color: beige;
  border: 5px solid #eee;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
`;

const NicknameInput = styled.input`
  width: 20rem;
  border-radius: 5px;
`;

const AboutTextarea = styled.textarea`
  width: 20rem;
  height: 20rem;
  border-radius: 5px;
  padding: 5px;
  resize: none;
`;

const SubmitButton = styled.button`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: 0.4rem;
  width: 5rem;
  &:hover {
    background-color: orange;
  }
`;

export { Container, Formbox, NicknameInput, AboutTextarea, SubmitButton };
