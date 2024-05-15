import Features from "../components/Features";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";

function Welcome() {

  const navigate = useNavigate()

  return (
    <>
      <main className='flex w-12 mx-auto flex-col items-center justify-around min-h-screen font-text'>
        <Title />
        <PrimaryButton text='Get Started' onClick={() => {}}/>
        <Features />
      </main>
    </>
  );
}

export default Welcome;
