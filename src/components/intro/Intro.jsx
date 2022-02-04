import React from 'react';
import "./intro.scss"
import Typed from 'react-typed';

export default function intro() {

  return (
    <div className='intro' id='intro'>
      <div className="left">
          <div className="imageContainer">
             <img src='assets/man.png' alt='man image' />
          </div>
      </div>
      <div className="right">
          <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Shashi Bhushan</h1>
            <h3>Web <span >
            <Typed
                strings={[
                    'Developer',
                    'Programmer']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
              </span></h3>
          </div>
          <a href='#portfolio'>
            <img src='assets/down.png' />
          </a>
      </div>
    </div>
  );
}
