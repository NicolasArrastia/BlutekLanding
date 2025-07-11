type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: Props) => {
  return (
    <button
      className="bg-neutral-950 font-medium text-white px-4 p-2 rounded-sm cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
