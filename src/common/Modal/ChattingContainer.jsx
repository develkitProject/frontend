import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

function ChattingContainer({ children }) {
  return createPortal(<>{children}</>, document.getElementById('chatting'));
}

export default ChattingContainer;
