import styled from 'styled-components';

const WholeWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
`;

const ContentDiv = styled.div`
  height: 100%;
  padding-bottom: 250px;
`;

const ContentWithoutFooterDiv = styled.div`
  height: 100%;
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 55px;
`;

export { WholeWrapperDiv, ContentDiv, ContentWithoutFooterDiv, MainDiv };
