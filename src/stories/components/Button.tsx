import React from "react";

const colorClasses = {
  red: "text-red-500",
  blue: "text-blue-500",
  green: "text-green-500",
  yellow: "text-yellow-500",
  indigo: "text-indigo-500",
  purple: "text-purple-500",
  pink: "text-pink-500",
  white: "text-white",
  black: "text-black",
};

const backgroundColorClasses = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  indigo: "bg-indigo-500",
  purple: "bg-purple-500",
  pink: "bg-pink-500",
  transparent: "bg-transparent",
  black: "bg-black",
};

const borderColorClasses = {
  red: "border-red-500",
  blue: "border-blue-500",
  green: "border-green-500",
  yellow: "border-yellow-500",
  indigo: "border-indigo-500",
  purple: "border-purple-500",
  pink: "border-pink-500",
  transparent: "border-transparent",
  black: "border-black",
};

const opacityOptions = [
  "10",
  "20",
  "30",
  "40",
  "50",
  "60",
  "70",
  "80",
  "90",
  "100",
];

const gradientOptions = [
  "linear-gradient(to right, #ff9966, #ff5e62)",
  "linear-gradient(to right, #00f260, #0575e6)",
  "linear-gradient(to right, #e1eec3, #f05053)",
  // add more gradients as needed
];

const borderRadiusClasses = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  color?: keyof typeof colorClasses;
  backgroundColor?: keyof typeof backgroundColorClasses;

  label: string;
  onClick?: () => void;
  border?: boolean;

  borderColor?: keyof typeof borderColorClasses;
  borderRadius?: keyof typeof borderRadiusClasses;
  opacity?: string;
  gradient?: string;
}

export const Button = ({
  primary = false,
  size = "medium",
  color = "blue",
  backgroundColor = "blue",
  label,
  border = false,
  borderColor = "blue",
  borderRadius = "md",
  opacity = "100",
  gradient,
  ...props
}: ButtonProps) => {
  const mode = backgroundColorClasses[backgroundColor];
  // const mode = primary
  //   ? backgroundColorClasses[backgroundColor]
  //   : "bg-gray-300";

  const colorClass = colorClasses[color];
  const borderClasses = border
    ? `border-2 ${borderColorClasses[borderColor]}`
    : "";
  const borderRadiusClass = borderRadiusClasses[borderRadius];
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };
  const opacityClass = `opacity-${opacity}`;
  const gradientStyle = gradient ? { backgroundImage: gradient } : {};
  return (
    // <button
    //   type="button"
    //   className={`${colorClass} ${mode} ${borderClasses} ${borderRadiusClass} ${sizeClasses[size]}`}
    //   {...props}
    // >
    //   {label}
    // </button>
    <button
      type="button"
      className={`${colorClass} ${mode} ${borderClasses} ${borderRadiusClass} ${sizeClasses[size]} ${opacityClass} transform transition-transform duration-150 ease-in-out hover:scale-105 focus:outline-none focus:scale-105`}
      style={gradientStyle}
      {...props}
    >
      {label}
    </button>
  );
};
