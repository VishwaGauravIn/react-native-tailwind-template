![ReactNative + Tailwind Template](https://github.com/VishwaGauravIn/Images/blob/main/rn+tailwind.png?raw=true)
# ReactNative + TailwindCSS Template

## How to Use ?
- Step 1: Clone this respository and open in VSCode (or any code editor of your choice)
- Step 2: Open a Terminal and Install required packages by using ``` npm i ```
- Step 3: Run the Project using ``` expo start ```
- Step 4: Open a new terminal and run ``` npm run dev:tailwind ``` for development mode
- Step 5: You can write code in _Home.js_ or create any components in _components_ folder.
- Result: Your app will work perfectly and reflect all the changes

## Note:
- This is not any official version of tailwindcss for reactnative so few classes are missing 
- In order to change the folder structure, you need to change content section in _tailwind.config.js_
- for using tailwind styling you need to wrap classes in tw, for example ```tw('text-cyan-500')```

## Example Code :
Here are some basic example codes for you, you **don't** need to do these as I have already done everything for you.

### Wrapping Home in order to use tailwind classes
```javascript
import { TailwindProvider } from "tailwind-rn";
import { Home } from "./Home";
import utilities from "./tailwind.json";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <Home />
    </TailwindProvider>
  );
}
```

### Using tailwind styles
```javascript
import React from "react";
import { Text } from "react-native";
import { useTailwind } from "tailwind-rn";

export const Home = () => {
  const tw = useTailwind();
  return (
    <Text
      style={tw(
        "text-cyan-800 mt-8 self-center bg-cyan-200 text-center w-32 px-2 p-1 rounded-xl"
      )}
    >
      Hello from VG !
    </Text>
  );
};

```

## Official Docs:
[![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactnative.dev/docs/getting-started)
[![TailwindCSS](https://img.shields.io/badge/tailwind%20for%20React%20Native-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://github.com/vadimdemedes/tailwind-rn)

## Updates ?
For updates, you can ⭐Star this repository