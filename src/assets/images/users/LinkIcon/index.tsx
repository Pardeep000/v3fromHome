import React from "react";

interface IconProps {
  width?: number;
  height?: number;
  iconClass?: string;
  color?: string;
}

const LinkIcon: React.FC<IconProps> = ({ width, height, iconClass, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke={color}
      strokeWidth={2}
      fill="none"
      width={width}
      height={height}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${iconClass}feather feather-link`}
    >
      <path
        fill="none"
        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
      />
      <path
        fill="none"
        d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
      />
    </svg>
  );
};

LinkIcon.defaultProps = {
  width: 15,
  // isBorder: false,
  iconClass: "align-self-center",
  color: "black",
  height: 15,
};

export default React.memo(LinkIcon);
