import React from 'react'
import ReactDOM from 'react-dom/client'
import {AppPrincipal} from './App.jsx'
import './App.css'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

// --------CREAR COMPONENTE Y RENDERIZARLO ---------


// // const crearBoton = ({text}) => { ESTO ESTA MAL, NO ES DECLARATIVO
// // NOMBRE DEBE SER PascalCase
// const UnBoton = ({text}) => { // ESTA ESLA FORMA CORRECTA
//   return(
//     <button>
//       {text}
//     </button>
//   )
// } 

root.render(
<AppPrincipal />
)