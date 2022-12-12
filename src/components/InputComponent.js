import React from "react";

function InputComponent(props) {



  return (
    <div className="container">
      <div className="columns" />
      <div className="columns">
        <div className="column">
          <input className="input" type="number" placeholder="1 a 5 (empleados)" />
        </div>
        <div className="column">ID Empleado</div>
      </div>
      <div className="columns">
        <div className="column">
          <input className="input" type="number" placeholder="1 a 20 (Usuarios)" />
        </div>
        <div className="column">ID Usuario</div>
      </div>
      <div className="columns">
        <div className="column">
          <input className="input" type="number" placeholder="1 a 2 (Efectivo,Tarjeta)" />
        </div>
        <div className="column">ID Forma Pago</div>
      </div>
      <div className="columns">
        <div className="column">
          <input className="input" type="number" placeholder="1 al 20 (Productos)" />
        </div>
        <div className="column">Id Producto</div>
      </div>
      <div className="columns">
        <div className="column">
          <input className="input" type="number" placeholder="Cualquier monto" />
        </div>
        <div className="column">Cantidad</div>
      </div>
      <div className="container has-text-centered">
        <button className="button">Enviar</button>
      </div>
    </div>
  );
}

export default InputComponent;
