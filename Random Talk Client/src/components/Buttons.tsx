function Buttons() {
  const buttonStyles = {
    primary:
      "text-6 rounded-full bg-grape-600 text-grape-100 py-3 px-4 font-medium shadow-[inset_0px_1px_1px_#ab8dd8,_inset_0px_0px_0px_#000,_0px_1px_1px_#351764]  focus:shadow-[inset_0px_1px_1px_#431f7a,_inset_0_-1px_1px_#ab8dd8,_0px_0px_0px_#442475] transition duration-300",
    secondary:
      "text-5 rounded-full shadow-[inset_0px_1px_0px_#e0d6f0,_inset_0px_0px_0px_#e0d6f0,_0px_1px_1px_#442475] bg-grape-200 text-gray-800 px-3 py-2 focus:shadow-[inset_0px_1px_1px_#7342bd,_inset_0_-1px_1px_#e0d6f0,_0px_0px_0px_#e0d6f0] transition duration-300",
  };

  const PrimaryButton = () => (
    <button className={buttonStyles.primary}>Get Started</button>
  );

  const SecondaryButton = () => (
    <button className={buttonStyles.secondary}>I Have An Account</button>
  );

  return (
    <div className='flex flex-col items-center gap-3'>
      <PrimaryButton />
      <SecondaryButton />
    </div>
  );
}

export default Buttons;
