import React from "react";
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import NotesIcon from '@material-ui/icons/Notes';
function Header() {
  return (
    <header>
      <div class="row">
      <SentimentSatisfiedAltIcon /><SentimentSatisfiedAltIcon /><SentimentSatisfiedAltIcon /><SentimentSatisfiedAltIcon /><SentimentSatisfiedAltIcon />
      </div>
      <h1><NotesIcon />Notes Keeper</h1>
    </header>
  );
}

export default Header;
