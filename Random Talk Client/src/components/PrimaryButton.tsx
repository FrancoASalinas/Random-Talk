type Props = {
  text: string;
  padding?: "2" | "3";
  textSize?: "4" | "6";
};

function PrimaryButton({ text, padding = "3", textSize = "4" }: Props) {
  const paddingList = {
    "2": "py-2 px-3",
    "3": "py-3 px-4",
  };

  const textSizeList: { "4": "text-4"; "6": "text-6" } = {
    "4": "text-4",
    "6": "text-6",
  };

  return (
    <button
      className={` rounded-full bg-grape-600 text-grape-100 ${paddingList[padding]} ${textSizeList[textSize]} font-bold w-max shadow-[inset_0px_1px_1px_#8259c0,_inset_0px_0px_0px_#000,_0px_1px_1px_#351764]  focus:shadow-[inset_0px_1px_1px_#431f7a,_inset_0_-1px_1px_#ab8dd8,_0px_0px_0px_#442475] transition duration-300`}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
