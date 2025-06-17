import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


/*
3. En el JSX del componente, renderiza un título `<h2>` con el texto "Teacher Name" seguido del valor de `name`.
4. Renderiza una lista `<ul>` con tres elementos `<li>`, cada uno con un nombre de profesor diferente:
   - El texto de cada elemento `<li>` debe ser uno de los nombres predefinidos ("Data", "Reyes", "Yolanda").
   - Al hacer clic en cada elemento de la lista, se debe cambiar el nombre del profesor mostrado en el título a uno de los nombres predefinidos correspondientes.
   - Utiliza la función `setName` proporcionada por `useState` para actualizar el nombre del profesor cuando se haga clic en un elemento de la lista.
*/