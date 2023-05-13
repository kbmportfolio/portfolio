import { TypeAnimation } from 'react-type-animation';

const TypeA = () => {
  return (
    <TypeAnimation
      sequence={[
        'Hi, My Name is Kevan', // Types 'One'
        3000, // Waits 1s
        'I love to Develop', // Deletes 'One' and types 'Two'
        3000, // Waits 2s
        'I love the Outdoors',
        3000, // Types 'Three' without deleting 'Two'
        () => {
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1.5em', display: 'inline-block' }}
    />
  );
};

export default TypeA;