import { RefObject, forwardRef, useImperativeHandle, useRef } from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export type ButtonRefs = {
  primaryButtonRef: RefObject<HTMLButtonElement>
  secondaryButtonRef: RefObject<HTMLButtonElement>
}

const Buttons = forwardRef<ButtonRefs>((_, ref) => {
  
  const primaryButtonRef = useRef<HTMLButtonElement>(null);
  const secondaryButtonRef = useRef<HTMLButtonElement>(null)
  
  useImperativeHandle(ref, () => ({
    primaryButtonRef: primaryButtonRef,
    secondaryButtonRef: secondaryButtonRef
  }))

  return (
    <div className='flex flex-col items-center gap-3'>
      <PrimaryButton text='Get Started' ref={primaryButtonRef}/>
      <SecondaryButton ref={secondaryButtonRef}/>
    </div>
  );
})

export default Buttons;
