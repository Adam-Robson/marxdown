import React, { useState } from 'react';
import { useMarkdownContext } from '../context/MarkdownContext';
import Header from './Header';

export default function Editor() {
  const [markdown, setMarkdown] = useMarkdownContext();

  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);

  function wordsCount(str) {
    return str.match(/(\w+)/g).length
  }

  function characterCount(str) {
    return str.length
  }

  function updateMarkdown(e) {
    const val = e.target.value;
    setMarkdown(val);
    setWords(wordsCount(val));
    setCharacters(characterCount(val));
  }

  function downloadNewFile() {
    const link = document.createElement('a');
    const file = new Blob([markdown], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = 'untitled_markdown_file.md';
    link.click()
    URL.revokeObjectURL(link.href);
  }

  return (
    <>
      <section>
        <Header
          title="Editor"
          subtitle={
            `${words} words ${characters} characters` }
        />

        <textarea
          className='editor'
          value={ markdown }
          onChange={ updateMarkdown }
        />

        <button onClick={ downloadNewFile }>download</button>

      </section>
    </>
  )

}
