
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
import React from 'react';
import TodoList from './TodoList';

function App() {
  const myTodos = ['Learn React', 'Build a Todo App', 'Deploy the App'];

  return (
    <div>
      <h1>My Todo List</h1>
      <TodoList todos={myTodos} />
    </div>
  );
}

export default App;
