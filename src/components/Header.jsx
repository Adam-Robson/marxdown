import React from 'react';

export default function Header({ title, subtitle }) {
  return (
    <>
      <section>
        <div>{ title && <p className="title">{ title }</p> }</div>
        <div>{ subtitle && <p className="subtitle">{ subtitle }</p> }</div>
      </section>
    </>
  )
}