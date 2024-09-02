
                                                                // React Day 1
                                                      // Props and useState Assignment


// Question 1: Simple Props
// Create a functional component called `Greeting` that accepts a `name` prop and displays a greeting  message, e.g., 'Hello, [name]!'.

// import React from 'react';
// import Greeting from './Greeting';

// function App() {
//     return (
//         <div>
//             <Greeting name="Alice" />
//             <Greeting name="Bob" />
//         </div>
//     );
// }
// export default App;

// Question 2: Multiple Props
// Build a `ProfileCard` component that takes `name`, `age`, and `location` as props and displays them
// in a card layout.


// import React from 'react';
// import ProfileCard from './ProfileCard';

// function App() {
//     return (
//         <div>
//             <ProfileCard name="John Doe" age={28} location="New York, USA" />
//             <ProfileCard name="Jane Smith" age={34} location="London, UK" />
//             <ProfileCard name="Alice Johnson" age={23} location="Sydney, Australia" />
//         </div>
//     );
// }

// export default App;

// Question 3: Conditional Rendering with Props
// Create a `StatusMessage` component that takes a `status` prop. If `status` is 'success', display
// 'Operation was successful'. If `status` is 'error', display 'There was an error'.

// import React from 'react';
// import StatusMessage from './StatusMessage';

// function App() {
//     return (
//         <div>
//             <StatusMessage status="success" />
//             <StatusMessage status="error" />
//             <StatusMessage status="pending" />
//         </div>
//     );
// }

// export default App;

// Question 4: useState Basics
// Create a `Counter` component that uses `useState` to track and display a count. Include buttons to
// increment and decrement the count.

// import React from 'react';
// import Counter from './Counter';

// function App() {
//     return (
//         <div>
//             <Counter />
//         </div>
//     );
// }

// export default App;

// Question 5: Props and useState Interaction
// Create a `LikeButton` component. It should accept a `likeCount` prop, but internally manage the
// count using `useState`. Clicking the button should increase the like count.

// import React from 'react';
// import LikeButton from './LikeButton';

// function App() {
//     return (
//         <div>
//             <LikeButton likeCount={10} />
//             <LikeButton likeCount={25} />
//         </div>
//     );
// }

// export default App;

// Question 6: State Initialization with Props
// Create a `Timer` component that accepts a `start` prop to set the initial time in seconds. Use
// `useState` to manage the timer's state and display the current time.

// import React from 'react';
// import Timer from './Timer';

// function App() {
//     return (
//         <div>
//             <Timer start={10} />
//             <Timer start={30} />
//         </div>
//     );
// }

// export default App;

//  Question 7: Updating Parent State from Child
// Create a `ColorPicker` component that allows the user to select a color. Pass a callback function via
// props to update the selected color in the parent component's state.

// import React, { useState } from 'react';
// import ColorPicker from './ColorPicker';

// function App() {
//     // State to store the selected color
//     const [selectedColor, setSelectedColor] = useState('#000000');

//     // Update the selected color in the parent component's state
//     const updateColor = (color) => {
//         setSelectedColor(color);
//     };

//     return (
//         <div>
//             <h2>Selected Color: <span style={{ color: selectedColor }}>{selectedColor}</span></h2>
//             <ColorPicker onColorSelect={updateColor} />
//         </div>
//     );
// }

// export default App;

// Question 8: Controlled vs Uncontrolled Components
// Build a `TextInput` component with an input field. Use `useState` to control the input's value, and
// pass the current value back to the parent component using a prop.

// import React, { useState } from 'react';
// import TextInput from './TextInput';

// function App() {
//     // State to store the input value from the child component
//     const [text, setText] = useState('');

//     // Function to update the parent state with the input value
//     const handleTextChange = (value) => {
//         setText(value);
//     };

//     return (
//         <div>
//             <h2>Current Input: {text}</h2>
//             <TextInput onValueChange={handleTextChange} />
//         </div>
//     );
// }

// export default App;

// Question 9: Props as Functions
// Create a `ToggleSwitch` component. It should accept a `toggleState` prop which is a function. When
// the switch is clicked, it should call `toggleState` to update the parent component's state.

// import React, { useState } from 'react';
// import ToggleSwitch from './ToggleSwitch';

// function App() {
//     // State to track the toggle status (true or false)
//     const [isOn, setIsOn] = useState(false);

//     // Function to toggle the state
//     const toggleState = () => {
//         setIsOn(prevState => !prevState);
//     };

//     return (
//         <div>
//             <h2>The switch is {isOn ? 'ON' : 'OFF'}</h2>
//             <ToggleSwitch toggleState={toggleState} />
//         </div>
//     );
// }

// export default App;

// Question 10: use Rendering Lists with Props  to 
// Create a TodoList component that accepts an array of todos via props. Render each todo item in the list.

// App.jsx
// import React from 'react';
// import TodoList from './TodoList';

// function App() {
//   const myTodos = ['Learn React', 'Build a Todo App', 'Deploy the App'];

//   return (
//     <div>
//       <h1>My Todo List</h1>
//       <TodoList todos={myTodos} />
//     </div>
//   );
// }

// export default App;


                                                                // React Day 2
                                             // Assignment: Fetching Data from an API and Displaying It in Cards Using React
// Objective:
// The aim of this assignment is to enhance your skills in fetching data from a public API and
// displaying that data in a well-structured card layout using React. You will learn how to manage state,
// handle side effects with `useEffect`, and present data dynamically in a card format.
// Task:
// 1. Create a React Component:
// - Create a new React component called `ProductCardList`.
// 2. Set Up State:
// - Use the `useState` hook to create two pieces of state:
// - `products` (an array to hold the fetched product data).
// - `loading` (a boolean to manage the loading state).
// 3. Fetch Data with `useEffect`:
// - Use the `useEffect` hook to fetch data from the following API endpoint when the component
// mounts:
// - API: `https://fakestoreapi.com/products`
// - While the data is being fetched, set the `loading` state to `true`. Once the data is successfully
// fetched, update the `products` state with the fetched data and set the `loading` state to `false`.
// 4. Create a Card Component:
// - Create a child component called `ProductCard` that accepts a product as a prop and displays the
// following details in a card layout:
// - Product image
// - Product title
// - Product price
// - Product description (limited to 100 characters)
// - Style the card with basic CSS to ensure it looks visually appealing.
// 5. Render the Cards:
// - In the `ProductCardList` component, map over the `products` array and render a `ProductCard`
// for each product.
// - If `loading` is `true`, display a loading message.
// 6. Error Handling (Bonus):
// - Optionally, handle any errors that might occur during the fetch operation by displaying an error
// message.
// Example Output:
// The component should display a 'Loading...' message while the data is being fetched. Once the data
// is fetched, it should display a grid of product cards, each showing the product image, title, price, and
// truncated description.
// Requirements:
// - You must use `useState` to manage the `products` and `loading` states.
// - You must use `useEffect` to fetch data from the API when the component mounts.
// - The `ProductCard` component should be reusable and accept product details as props.
// Deliverables:
// A React component that fetches product data from the API and displays it in a series of cards. The
// card layout should be visually structured and responsive.
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// import React from 'react';
// import ProductCardList from './ProductCardList';


// const App = () => {
  
//   return (
//     <div className="App">
//       <h1>Product List</h1>
//       <ProductCardList />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductProvider } from './ProductContext';
import ProductCardList from './ProductCardList';
import ProductDetails from './ProductDetails'; // This component would display details of a single product

const App = () => {
  return (
    <ProductProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<ProductCardList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </Router>
    </ProductProvider>
  );
};

export default App;
