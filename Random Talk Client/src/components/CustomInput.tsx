import { ChangeEvent } from "react";

interface Props {
  placeholder?: string;
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function CustomInput({ placeholder, id, label, value, onChange }: Props) {
  return (
    <div>
      <label className='mb-2 block font-headline text-3' htmlFor={id}>
        {label}
      </label>
      <input
        type='text'
        id={id}
        placeholder={placeholder}
        className='focus:outline-none p-4 w-full h-6 rounded-full text-gray-100 bg-grape-700 font-text  shadow-[inset_0px_1px_1px_#31135e,_inset_0px_-1px_1px_#5d3993] placeholder:text-grape-100 placeholder:text-opacity-30'
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default CustomInput;
