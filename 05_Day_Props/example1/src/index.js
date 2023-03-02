import React from 'react';
import ReactDOM from 'react-dom/client';
import css_logo from './images/css_logo.png';
import html_logo from './images/html_logo.png';
import js_logo from './images/js_logo.png';
import react_logo from './images/react_logo.png';

const Title = (props) => {
  return <h1>{props.title}</h1>
}

const Images = (props) => {
  const htmlImages = props.technologies.map((tech) => {
    const alt = tech+' logo';
    return <img src={tech} alt={alt}/>});
  return (<div className='imgWrapper'>
    {htmlImages}
  </div>)
}

const App = () => {
  const title = 'Frontend technologies';
  const technologies = [html_logo, css_logo , js_logo, react_logo];
  return <div className='app'>
    <Title title={title}/>
    <Images technologies={technologies}/>
  </div>;
}


const root = ReactDOM.createRoot(document.getElementById('root'));        
root.render(<App />);