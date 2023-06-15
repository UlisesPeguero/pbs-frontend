import React from 'react';
import { createPortal } from 'react-dom';

export default function GridToolBar({
  containerId
}) {
  return createPortal(
    <>
      <p>Grid Toolbar</p>
    </>,
    document.getElementById(containerId));
}
