import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional for 
// 
import "tippy.js/animations/scale.css"; // optional for
import "tippy.js/themes/light.css"; // optional for
// styling
import { forwardRef } from "react";


const Button = forwardRef(({ 
  onClick, 
  children, 
  className = "", 
  disabled = false, 
  type = "button", 
  hasTippy = false,
  tippyProps = {},
  ...props 

},
ref

) => {
  const defaultStyles = `
    px-8 py-2 
    bg-button text-text font-bold 
    transition duration-200
  `;


  // return (
  //   <button
  //     onClick={onClick}
  //     disabled={disabled}
  //     type={type}
  //     className={`${defaultStyles} ${className}`}
  //     {...props}
  //     user-select="none"
  //     ref={ref}
  //   >
  //     {children}
  //   </button>
  // );
  const ButtonContent = (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${defaultStyles} ${className}`}
      {...props}
      userselect="none"
      ref={ref}
    >
      {children}
    </button>
  );
  if(hasTippy&& tippyProps.content&&tippyProps) {
    return <Tippy {...tippyProps}>
        {ButtonContent}
      </Tippy>;

  }
  return ButtonContent;
});

export default Button;