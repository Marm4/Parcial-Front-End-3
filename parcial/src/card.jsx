function Card({ data }){
    
    return (
      <div className="card">
        <h2>Informacion ingresada</h2>
        <h4>Nombre: {data.nombre}</h4>
        <h4>Numero de telefono: {data.telefono}</h4>
      </div>
    );
  }
  
  export default Card;