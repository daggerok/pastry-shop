const buttonStyles = {
  border: 'none',
  background: 'none',
  color: 'gray',
};

export function Button({ name }) {
  return <button className='Button' style={buttonStyles}>
    {name}
  </button>;
}
