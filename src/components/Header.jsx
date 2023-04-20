import React from 'react';

export default function Header({ title, subtitle }) {
  return (
    <>
      <section>
        <div>{ title && <h3 className="title">{ title }</h3> }</div>
        <div>{ subtitle && <h4 className="subtitle">{ subtitle }</h4> }</div>
      </section>
    </>
  )
}