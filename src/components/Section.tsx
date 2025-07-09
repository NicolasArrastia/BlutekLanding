type Props = {
  title: string[];
  children?: React.ReactNode;
  id?: string;
};

export const Section = ({ children, title, id }: Props) => {
  return (
    <section id={id} className="flex flex-col items-center py-20 px-5">
      <h2 className="inline-flex gap-2 text-center text-4xl text-neutral-950 mb-8">
        {title.map((str, index) => (
          <span className="even:font-semibold even:text-blue-900" key={index}>
            {str}
          </span>
        ))}
      </h2>
      {children}
    </section>
  );
};
