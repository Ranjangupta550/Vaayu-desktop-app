// components/Portal.jsx
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * Portal component to render children outside the component's DOM hierarchy.
 * This is useful for modals, tooltips, and other overlays that need to escape
 * parent CSS properties like `overflow: hidden`.
 *
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the portal.
 * @param {string} [props.wrapperId="react-portal-wrapper"] - The ID for the DOM element where the children will be rendered.
 */
function Portal({ children, wrapperId = "react-portal-wrapper" }) {
  // State to hold the DOM element where the portal content will be rendered
  const [wrapperElement, setWrapperElement] = useState(null);

  // Function to create a DOM wrapper element if it doesn't exist
  function createWrapperAndAppendToBody(wrapperId) {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', wrapperId);
    document.body.appendChild(wrapper);
    return wrapper;
  }

  useEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    // If the wrapper element doesn't exist, create it and append to the body
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    // Set the wrapper element in state
    setWrapperElement(element);

    // Cleanup function: remove the wrapper element if it was created by this component
    return () => {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]); 


  if (wrapperElement === null) return null;

  // Render the children into the wrapper element using createPortal
  return createPortal(children, wrapperElement);
}

export default Portal;