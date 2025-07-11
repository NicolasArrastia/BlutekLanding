type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: Props) => {
  return (
    <button
      className="bg-blue-900 font-medium text-white px-6 p-2 rounded-full cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
