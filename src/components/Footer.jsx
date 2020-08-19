import React from "react";
import CopyrightIcon from '@material-ui/icons/Copyright';
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Ankit Ayush Copyright {year} <CopyrightIcon/> </p>
    </footer>
  );
}

export default Footer;
