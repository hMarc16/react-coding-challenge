# Overview:

My approach to this coding challenge is to create two components ```Element``` and ``` Fields``` to handle the Technical Specifications.

```Element``` is used to represent the items in the element tray, which is dragable and droppable to the Form body. Inside it, there is an event handler that looks for the drag event and will save its data when the event triggers. The data is simply a string that represents a potential input to the form. 

```Fields``` is used to initialize and hold the information on the form. There are two React states: ```fieldInput``` and ```hovered```. The ```fieldInput``` state is for holding the data on the input fields, where they are initialized to their respective names such as First Name, Email, etc. 

The ```handleDrop``` function will look for the React drag event and read the saved data and set it to the input field as the user drops it. 
```
const data = e.dataTransfer.getData("text/plain");
setFieldInput(data); 
```

All three handler functions will also change the state of ```hovered```, depending on the user's action. Dragging over the input box will set the state to ```true```, and together with the CSS, the field that is hovered over when dragging an element will be highlighted, as the instructions required. 

```
<div className={`input-box ${hovered ? "highlight" : ""}`}
  ...
>
```

Finally, the submit button will provide user with an alert, notifying them that the form is submitted.

# Design Decisions

I did not make any significant decisions involving tradeoffs. Based on my research, another common practice to implement the drag and drop functionality is to use ```dnd-kit```.

# Limitations

First, this simple drag and drop form does not check for input types or fields. While it is specifically mentioned in the instructions that form element can be dropped in any of the input fields, an intuitive "Next Step" would be restricting elements to their corresponding field. (e.g. Can only drop emails on the Email field)

Also, the elements tray is simply designed to handle a small amount of data. If the user were to import these elements from a large database, the UI will be naively expanded without any code splitting mechanisms. 

Another limitation is that ```handleSubmit``` is in ```App.tsx``` and does not have control over the ```fieldInput``` state. Which means currently submitting the form will not automatically reset the form. Only refreshing the page will work.

Finally, as the handout suggests, there is no perservation of data. 


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
