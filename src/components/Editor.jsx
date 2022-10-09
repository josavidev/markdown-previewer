import PropTypes from 'prop-types';
import styled from 'styled-components';

const EditorText = styled.div`
  background-color: #0b132b;
  border-right: 3px dashed white;
  height: 100%;
  padding: 2px;
  transition: background-color ease-in-out .3s;
  width: 100%;

  textarea {
    background-color: transparent;
    border: none;
    color: white;
    height: 100%;
    padding: 20px;
    resize: none;
    width: 100%;
  }
`;

export default function Editor({ md, setMD }) {
  const handleEditorChanged = e => {
    setMD(e.target.value);
  };

  return (
    <EditorText>
      <textarea
        id="editor"
        type="text"
        onChange={handleEditorChanged}
        value={md} />
    </EditorText>
  );
};

Editor.propTypes = {
  md: PropTypes.string.isRequired,
  setMD: PropTypes.func.isRequired
};