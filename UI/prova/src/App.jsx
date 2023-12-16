import React, { useState } from 'react';

const MyComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (!inputValue.trim()) {
      console.error('Error: Input value is empty');
      return;
    }

    console.log(inputValue);
    fetch('http://127.0.0.1:5000/run-script', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ program_name: inputValue }),  // Send data in the request body as JSON
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <label>
        Enter Program Name:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <button onClick={handleButtonClick}>Submit</button>
    </div>
  );
};

export default MyComponent;
