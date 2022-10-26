import React, { useState } from 'react';

export function Search() {
  const [searchCriteria, setSearchCriteria] = useState('');

  const onChange = event => setSearchCriteria(event.target.value); // same as:
  // function onChange(event) {
  //   setSearchCriteria(event.target.value);
  // }

  return <>
    <input onChange={onChange} />
    <p>Result: {searchCriteria}</p>
  </>;
}
