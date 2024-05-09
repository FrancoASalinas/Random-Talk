import { forwardRef } from "react";

const SecondaryButton = forwardRef<HTMLButtonElement>((_, ref) => (
    <button ref={ref} className='text-5 text-gray-800 rounded-full font-medium shadow-[inset_0px_1px_0px_#e0d6f0,_inset_0px_0px_0px_#e0d6f0,_0px_1px_1px_#442475] bg-grape-200 px-3 py-2 focus:shadow-[inset_0px_1px_1px_#7342bd,_inset_0_-1px_1px_#e0d6f0,_0px_0px_0px_#e0d6f0] transition duration-300'>
      I Have An Account
    </button>
  ));

  export default SecondaryButton