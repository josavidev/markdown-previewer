import PropTypes from 'prop-types';
import { marked } from 'marked';
import styled from 'styled-components';

const PreviewHtml = styled.div`
  background-color: #0b132b;
  color: white;
  font-family: sans-serif;
  padding: 20px;

  img {
    background-color: white;
    width: 100%;
  }

  a {
    color: #2196f3;
    text-decoration: none;
    transition: color ease-in-out .3s;
  }

  a:hover {
    color: #64b5f6;
    text-decoration: underline;
  }

  code {
    background-color: #30343f;
    border-radius: 5px;
    display: inline-block;
    margin: 2px auto;
    padding: 5px;
  }
`;

export default function Previewer({ md }) {
  return (
    <PreviewHtml
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(md, {
          breaks: true,
          gfm: true
        })
      }} />
  );
};

Previewer.propTypes = {
  md: PropTypes.string.isRequired
};