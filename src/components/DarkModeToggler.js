import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from 'use-dark-mode';

const DarkModeToggler = () => {
//   const [isDarkMode, setIsDarkMode] = useState(() => false);
const darkMode = useDarkMode(false);
const scrollToTop = () =>{
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
};
  return (
       <button style={{background:'none',border: 'none'}}
       onClick={scrollToTop}
       >
    <DarkModeToggle
      onChange={darkMode.toggle}
      onClick = {scrollToTop}
      checked={darkMode.value}
      size={50}
    />
      </button>
     
  );
};
export default DarkModeToggler;
