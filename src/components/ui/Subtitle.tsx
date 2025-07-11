type Props = {
  children?: React.ReactNode;
};

export const Subtitle = ({ children }: Props) => {
  return (
    <span className="text-lg text-neutral-600 text-center max-w-3xl mx-auto">
      {children}
    </span>
  );
};
