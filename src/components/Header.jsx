import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import "/public/styles.css";

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon className="brand-icon" />
        Keeper
      </h1>
    </header>
  );
}

export default Header;
