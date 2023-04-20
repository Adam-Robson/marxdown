import React from 'react'
import Header from './components/Header';
import Editor from './components/Editor';
import Preview from './components/Preview';
import canvas from './assets/canvas.png';
import './App.css'


function App() {

  return (
    <>
      <section className="both">
        <Editor />
        <Preview />
      </section>
    </>
  )
}

export default App
