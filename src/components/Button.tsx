type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, type = "submit" }: Props) => {
  return (
    <button
      type={type}
      className="bg-neutral-950 font-medium text-white px-4 p-2 rounded-sm cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
