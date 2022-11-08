import React from "react";
import { CurrentScrollPositionContext } from "../Content";
import useAboutClasses from "./useAboutClasses";


function About() {
  const {position, setPosition} = React.useContext(CurrentScrollPositionContext);

  const onScrollHandler = React.useCallback((ev: React.UIEvent<HTMLElement>) => {
    let headers: HTMLElement[] = [];
    let position: number;

    Array.from(ev.currentTarget.children).forEach((el) => {
      if (el.nodeName === "SECTION") headers.push(Array.from(el.children)[0] as HTMLElement);
    });
    headers.forEach((el, index) => {
      if (el.offsetTop - ev.currentTarget.scrollTop <= 30) position = index;
    });
    setPosition(position);
  }, [])

  const classes = useAboutClasses();

  return (
    <div className={classes.about}>
      <article className={classes.contentContainer} onScroll={onScrollHandler}>
        <section>
          <h1 id="N1">Preview Mode</h1>
          <p>This page is currently in preview mode and is working on dummy data.</p>
          <p>Search for "data[number]" to get pregenerated example results.</p>
          <ol>
            <li>Normal result, one video. </li>
            <li>Normal result, multiple videos.</li>
            <li>Error result, if something went wrong on backend side.</li>
          </ol>
        </section>
        <section>
          <h1 id="N2">example heading 1</h1>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
        </section>
        <section>
          <h1 id="N3">example heading 2</h1>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
          <p>example text</p>
        </section>
      </article>
    </div>
  );
}

export default About;
