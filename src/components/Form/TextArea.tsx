type Props = {
  name: string;
  placeholder?: string;
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const TextArea = ({ name, placeholder, label, handleChange }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold" htmlFor={name}>
        {label}
      </label>
      <textarea
        name="message"
        placeholder={placeholder}
        rows={5}
        value={name}
        onChange={handleChange}
        required
        className="border border-neutral-300 rounded-md p-3 text-neutral-800 resize-none focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
};
