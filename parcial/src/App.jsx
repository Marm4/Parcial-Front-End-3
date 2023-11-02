import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState(0)
  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleChangeNombre = (event) => setNombre(event.target.value.trim())

  const handleChangeTelefono = (event) => setTelefono(event.target.value.trim())

  const handleSendData = () => {
    if(nombre.length>=3 && telefono.length>=6){
      setError('');
      setSubmittedData({nombre, telefono});
    } else {
      setError('Por favor chequea que la información sea correcta');
      setSubmittedData(null);
    }
  }

  return (
    <div className="App">
      <h1>Ingrese nombre y numero de telefono</h1>
        <form name="form" onSubmit={handleSendData}>
          <input type="text" placeholder='Ingrese su nombre' onChange={handleChangeNombre}/>
          <input type="number" placeholder='Ingrese su numero de telefono' onChange={handleChangeTelefono}/>

          <button type="button" onClick={handleSendData}>Enviar</button>
          
          {error && <p>{error}</p>}
        </form>     
        {submittedData && <Card data={submittedData}/>}
    </div>
  );
}

export default App;