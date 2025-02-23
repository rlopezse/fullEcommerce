import { useState, useEffect } from 'react'
import './index.scss';

function App() {
  const [equipos, setEquipos] = useState<any[]>([]);
  useEffect(() => {
    fetch('http://192.168.0.2/api/equipos')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setEquipos(data);
      });
  }, []);


  return (
    <>
      {equipos.map((equipo) => (
        <p key={equipo.name}>{equipo.name}</p>
      ))} 
    </>
  )
}

export default App
