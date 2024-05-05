function Features() {
  
  const UnderLine = () => (
    <div className='w-6 h-1 bg-gray-100 rounded-full'></div>
  );

  const FeatureTitle = ({ text }: { text: string }) => (
    <h2 className='text-6 font-medium mt-2'>{text}</h2>
  );

  const Feature = ({ text }: { text: string }) => (
    <p className='text-4 mt-2'>{text}</p>
  );

  return (
    <div className='text-gray-100'>
      <FeatureTitle text='Have Fun!' />
      <UnderLine />
      <Feature text='Chat with strangers for around the world in your desired language.' />
      <FeatureTitle text='Use Topics' />
      <UnderLine />
      <Feature
        text='Connect with people who is interested in the same things as you using
        our topics feature.'
      />
    </div>
  );
}

export default Features;
