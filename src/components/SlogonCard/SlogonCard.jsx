import React, { useState } from "react";
import "./SlogonCard.css";

const SlogonCard = ({ message }) => {
  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(message)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div
      className="slogon_card"
      onClick={() => {
        handleCopyClick();
      }}
    >
      <span className="copy_text">
        {isCopied ? "Copied !" : "Clickt to copy"}
      </span>
      {message}
    </div>
  );
};

export default SlogonCard;
