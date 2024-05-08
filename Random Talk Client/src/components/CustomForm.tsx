import PrimaryButton from "./PrimaryButton";

function CustomForm({
  title,
  children,
  buttonText,
}: {
  title: string;
  children: React.ReactNode;
  buttonText: string;
}) {
  return (
    <form
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

export default CustomForm;
