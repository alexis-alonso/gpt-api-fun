import React, { useState } from "react";

function App() {
  const [quote, setQuote] = useState('This element will change!');
  
  const getData = () => {
    fetch("https://type.fit/api/quotes") /* it's an arr of objects, turn it to json */
    .then(response => response.json())
    .then(data => {
      // console.log(data.length);
      let randomNum = Math.floor(Math.random() * data.length);
      setQuote(data[randomNum].text);
    })
  };

  return (
    <div className="App">
      <h2>{quote}</h2>

      <button onClick={getData}>Click Me!</button>

    </div>
  );
}

export default App;



// SUCCESS!!! 3/25/23