# Color Generator

A simple color generator built with React that allows users to input a color and generate different shades and tints. The project also allows users to copy the generated color hex code to the clipboard by clicking on a color cell, with a notification using React Toastify.

## Features

- Generate shades and tints for a chosen color.
- Input a color via a text field or color picker.
- Copy the hex code of the generated color by clicking on the color cell.
- Toast notifications to inform users when a color is copied to the clipboard.

## Installation

1. Clone the repository

```bash
Copy code
git clone https://github.com/yourusername/color-generator.git
cd color-generator
```

2. Install the dependencies

```bash
npm install
```

3. Run the development server

```bash
npm start
```

This will start the React development server on localhost:3000. You can now visit http://localhost:3000 in your browser.

## Usage

1. Once the app is running, you can enter a color code (e.g., #e66465) in the input field or use the color picker.
2. After submitting the color, the app will generate a range of shades and tints.
3. Click on any color cell to copy the hex code to the clipboard.
4. A toast notification will appear confirming that the hex code has been copied..

## Algorithm

The core logic for generating shades and tints of a color is powered by the values.js library. Here’s how the algorithm works:

1. User Input: The user selects or enters a color value, which is passed as a string (e.g., #e66465).
2. Color Parsing: The input color is passed to the Values constructor from the values.js library, which parses the color and generates shades and tints.
3. Shade/Tint Calculation:

- The all(10) method generates an array of colors, with 10% increments in darkness or lightness.
- The result is an array of colors, each represented by an object with its hexadecimal value and weight (percentage).

4. Display and Interaction:

- Each color in the array is displayed on the page, and when a color cell is clicked, the color code is copied to the clipboard using the navigator.clipboard API.
- A notification is displayed using React Toastify when the color is successfully copied.

## Technologies Used

- React: For building the user interface.
- React Toastify: For displaying toast notifications.
- nanoid: For generating unique keys for list items.
- values.js: For generating color shades and tints.

## Key Dependencies

To install React Toastify and nanoid, run:

```bash
npm install react-toastify nanoid
```

You can then import them into your project like this:

```javascript
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { nanoid } from "nanoid";
```

## CSS Styling

In addition to JavaScript, basic styling can be done through CSS. You can include toastify styles in your project by importing them at the top of your App.css or index.css:

```css
Copy code
@import 'react-toastify/dist/ReactToastify.css';
```

## Example Code Snippet for Copying and Toastifying:

```javascript
const copyToClipboard = (color) => {
  navigator.clipboard.writeText(`#${color.hex}`).then(() => {
    toast.success(`Copied: #${color.hex}`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000, // Auto close in 3 seconds
    });
  });
};
```

## Contribution

> Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute. Thank you!
