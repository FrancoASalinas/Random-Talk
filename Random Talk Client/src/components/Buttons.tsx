import PrimaryButton from "./PrimaryButton";

function Buttons() {
  const SecondaryButton = () => (
    <button className='text-5 text-gray-800 rounded-full font-medium shadow-[inset_0px_1px_0px_#e0d6f0,_inset_0px_0px_0px_#e0d6f0,_0px_1px_1px_#442475] bg-grape-200 px-3 py-2 focus:shadow-[inset_0px_1px_1px_#7342bd,_inset_0_-1px_1px_#e0d6f0,_0px_0px_0px_#e0d6f0] transition duration-300'>
      I Have An Account
    </button>
  );

  return (
    <div className='flex flex-col items-center gap-3'>
      <PrimaryButton text='Get Started' />
      <SecondaryButton />
    </div>
  );
}

export default Buttons;
