import './App.css'
import { Button, Graphic, History, Sidebar } from './components'



function App() {

    const navItems = [
    { to: '/home', label: 'Home', icon: <Graphic /> },
    { to: '/about', label: 'About', icon: <History /> },
    // Add more navigation items as needed
  ];


  return (
    <>
<Sidebar logoComponent={<img src='/vite.svg' alt="Calculadora de TRL" className="h-[80px]" />} navItems={navItems} />
<Button variant="minimal"
> exportar</Button>
    </>
  )
}

export default App
