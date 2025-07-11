// import React from "react";

// type SVGIconProps = {
//   src: string;
//   size?: number | string;
//   color?: string;
//   className?: string;
// };

// export const SVGIcon: React.FC<SVGIconProps> = ({
//   src,
//   size = 24,
//   color = "currentColor",
//   className = "",
// }) => {
//   const dimension = typeof size === "number" ? `${size}px` : size;

//   return (
//     <div
//       className={className}
//       style={{
//         width: dimension,
//         height: dimension,
//         backgroundColor: color,
//         maskImage: `url(${src})`,
//         WebkitMaskImage: `url(${src})`,
//         maskRepeat: "no-repeat",
//         WebkitMaskRepeat: "no-repeat",
//         maskSize: "contain",
//         WebkitMaskSize: "contain",
//         maskPosition: "center",
//         WebkitMaskPosition: "center",
//       }}
//     />
//   );
// };

type Props = {
  src: string;
  size?: string | number;
  color?: string;
  className?: string;
};

export const SVGIcon = ({ src, size = 24, color, className }: Props) => {
  const dimension = typeof size === "number" ? `${size}px` : size;

  console.log("src");
  console.log(src);
  return (
    <div
      style={{
        width: dimension,
        height: dimension,
        backgroundColor: color || "currentColor",
        maskImage: `url("${src}")`,
        WebkitMaskImage: `url("${src}")`,

        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        // =========
        // maskSize: "100%",

        // backgroundPosition: "center",
        // backgroundSize: "cover",
      }}
      className={className}
    />
  );
};
