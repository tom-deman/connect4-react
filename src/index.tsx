import ReactDOM from 'react-dom/client'
import App      from './App'

import './assets/css/tailwind.css'
import './assets/css/style.css'

const root = ReactDOM.createRoot( document.getElementById( 'root' ) as HTMLElement )
root.render(
    <App />
)
