import { forwardRef } from "react";
import PrimaryButton from "./PrimaryButton";

interface Props {
  title: string;
  children: React.ReactNode;
  buttonText: string;
}

const CustomForm = forwardRef<HTMLFormElement, Props>(
  ({ title, children, buttonText }, ref) => {
    return (
      <form
        ref={ref}
        action=''
        className='flex flex-col gap-6 bg-grape-900 p-5 rounded-xl items-center'
      >
        <legend className='text-5 font-medium font-headline self-start'>
          {title}
        </legend>
        {children}
        <PrimaryButton text={buttonText} padding='2' textSize='4' />
      </form>
    );
  }
);

export default CustomForm;
