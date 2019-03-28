// Import the React and ReactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
const App = () => {
  const buttonText ={text: 'Click me'};

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}}>
        {buttonText.text}
      </button>
    </div>
  );
};

/*

// 1 curly braket = javascript variable/function/object inside jsx
// double curly = accesing JS variable for style
  // then 2nd curly is for JS object (value we are passing it)
  // to create an object right then and there

const App = () => {
 return (
 <div>
   <label class="label" for="name">Enter name:</label>
   **adding a class to an element uses different syntax**
   ONLY because we don't want JS to think we are trying to reasign the keyword class
   <input id="name" type="text" />
   <button style="background-color: blue; color:white">Submit</button>
    **custom styling to an element uses different syntax**
  </div>
});
*/

//code (opening tag) must start immediately after return statement OR
//wrapped by ()

// Take the react component and show it on the screen

ReactDOM.render(
   <App />,
   document.querySelector('#root')
);



// component nesting --> a component can be shown inside of another
// component reusability -->  we want to make components that can be
  //easily reused through out application
// component configuration --> configure a component when it is created
