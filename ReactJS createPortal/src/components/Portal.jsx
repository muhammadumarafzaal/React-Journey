import { createPortal } from 'react-dom';

const Portal = ({ children, targetId = 'portal-root' }) => {
  const target = document.getElementById(targetId);
  
  if (!target) return null;
  
  return createPortal(children, target);
};

export default Portal;
