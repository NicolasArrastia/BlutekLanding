type Props = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset"; // agrego
  style?: React.CSSProperties;  // agrego

};

const Button = ({ children }: Props) => {
  return (
    <button className="bg-neutral-950 font-medium text-white px-4 p-2 rounded-sm">
      {children}
    </button>
  );
};

export default Button;
