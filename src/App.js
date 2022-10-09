import { useState } from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import initialMD from './defaultMD';
import styled from 'styled-components';

const SplitterDiv = styled.div`
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  overflow: hidden;
  width: 100%;

  * {
    box-sizing: border-box;
  }
`;

export default function App() {
  const [md, setMD] = useState(initialMD);

  return (
    <SplitterDiv>
      <Editor md={md} setMD={setMD} />
      <Previewer md={md} />
    </SplitterDiv>
  );
};
