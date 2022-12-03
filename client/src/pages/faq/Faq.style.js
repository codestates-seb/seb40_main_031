import styled from 'styled-components';
import { Theme } from 'style';

const Wrap = styled.div`

  width: 90%;
  height: 100%;
  margin: 50px auto;
`;
const Title = styled.div`
  font-size: 2em;
  margin-bottom: 1.5em;
  text-align: center;

`;

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TabButton = styled.button`
  width: 10%;
  height: 10%;
  font-size: 1.5em;
  border: none;
  border-bottom: 1px solid ${Theme.PRIMARY.GREEN_DARK};
  background-color: white;
  margin-left: 5px;

  &:hover {
    background-color: ${Theme.PRIMARY.GREEN_LIGHT};
    color: rgba(0, 0, 0, 0.5);
    border: none;
    transition: all 0.2s;
  }
  &:focus {
    background-color: ${Theme.PRIMARY.GREEN};
    transition: all 0.4;
  }
`;
const SearchBarForm = styled.form`
  width: 44%;
  background-color: ${Theme.PRIMARY.GREEN};
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 2em;
`;

const Select = styled.select`
  width: 5vw;
  height: 4vh;
`;

const Option = styled.option`
  font-size: 1.2em;
`;

const Input = styled.input`
  width: 20vw;
  height: 4vh;
`;

const SubmitButton = styled.button`
  width: 3.3vw;
  height: 2.3vw;
  border: 1px solid ${Theme.PRIMARY.GREEN_LIGHT};
  background-color: ${Theme.PRIMARY.GREEN_DARK};
`;

const FaqListTitle = styled.div`
  font-size: 1.4em;
  background-color: ${Theme.PRIMARY.GREEN_LIGHT};
  border-top: 1px solid ${Theme.PRIMARY.GREEN_DARK};
  border-bottom: 1px solid ${Theme.PRIMARY.GREEN};
  width: 72%;
  line-height: 3em;
  margin: 0 auto;
  margin-top: 20px;
`;

const FaqListTitlteContents = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4em;
`;

const FaqList = styled.li`
  font-size: 1.4em;
  background-color: ${Theme.PRIMARY.GREEN_LIGHT};
  border-bottom: 1px solid ${Theme.PRIMARY.GREEN};
  width: 72%;
  line-height: 3em;
  margin: 0 auto;
  list-style: none;
`;

const FaqListContents = styled.div`
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Theme.PRIMARY.GREEN};

  &:hover {
    background-color: ${Theme.PRIMARY.GREEN};
    transition: all 0.4s;
  }
`;

export {
  Wrap,
  Title,
  TabButton,
  TabContainer,
  SearchBarForm,
  Select,
  Option,
  Input,
  SubmitButton,
  FaqList,
  FaqListTitle,
  FaqListTitlteContents,
  FaqListContents,
};
