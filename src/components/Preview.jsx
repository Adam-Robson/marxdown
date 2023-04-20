import React from 'react';
import ReactMarkdown from 'react-markdown';
import Header from './Header';
import { useMarkdownContext } from '../context/MarkdownContext';

export default function Preview() {

  const [markdown] = useMarkdownContext();

  return (
    <>
      <Header title="Preview" />
      <div className="preview">
        <ReactMarkdown>{ markdown }</ReactMarkdown>
      </div>
    </>
  );
}
