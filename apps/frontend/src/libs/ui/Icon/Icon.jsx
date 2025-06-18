export default function Icon 
({icon: IconComponent, className, size=24, color = 'currentColor', ...props}) 

{
return (
    <IconComponent
    size={size}
      width={size}
      height={size}
      color={color}
      className={`text-inherit ${className}`}
      {...props}
    />
  );
}