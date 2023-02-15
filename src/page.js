import React, { Fragment, useEffect } from 'react';

export default function Page(props) {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return (
    <Fragment>
      <header>
        <h1>{props.title}</h1>
      </header>
      <main>{props.children}</main>
    </Fragment>
  );
}
