type Props = {
  value: string;
  name: string;
  placeholder?: string;
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  value,
  name,
  placeholder,
  label,
  handleChange,
}: Props) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-semibold" htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="w-full border border-neutral-300 rounded-md p-3 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
};
