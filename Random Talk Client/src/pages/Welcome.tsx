import Buttons from "../components/Buttons"
import Features from "../components/Features"
import Title from "../components/Title"

function Welcome() {
    return(<main className='flex w-12 mx-auto flex-col items-center h-full justify-around min-h-screen font-text'>
      <Title />
      <Buttons />
      <Features />
    </main>)
}

export default Welcome