import React from 'react';
import { useTheme } from './ThemeContext';

import "./App.css";
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`navbar ${theme}`}>
      <h1>Navbar</h1>
      <h3>This theme is {theme === 'light' ? 'Light' : 'Dark'}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
        viverra orci. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Etiam sit amet dolor et mauris
        vestibulum elementum sit amet sed ipsum. Proin sed orci a felis congue
        bibendum et at massa. Curabitur sit amet malesuada nunc. Proin ut velit
        quis erat malesuada scelerisque. Quisque sed sapien arcu. Duis auctor
        erat in nunc malesuada, quis venenatis sem dapibus. Nam aliquet ex nec
        felis hendrerit, eget efficitur risus fringilla. Nulla facilisi. Sed
        gravida, dui sed laoreet sagittis, turpis mi varius quam, non efficitur
        velit elit ac magna. Curabitur auctor velit a turpis sollicitudin
        posuere. Cras non risus id eros bibendum tempus. Sed id nulla id velit
        varius scelerisque ac sed purus. Suspendisse potenti. In euismod ligula
        nec lacus ullamcorper, nec interdum purus vehicula.
      </p>
      <div className="button-container">
        <button onClick={toggleTheme}>
          {theme === 'light' ? (
            <>
               Dark Theme
            </>
          ) : (
            <>
               Light Theme
            </>
          )}
        </button>
      </div>
      <img 
        src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-spring-summer-day-in-green-nature-mountains-free-photo.jpg?w=600&quality=80" 
        alt="Nature"
        className={`theme-image ${theme}`} 
      />
    </div>
  );
};

export default Navbar