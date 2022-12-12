import React, {useRef} from "react";

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from "axios";





const handleClickSucess = () => {
    Notify.success(
        'Registro exitoso'
    );
};


const handleClickError = (error) => {
    Notify.failure(
        error
    );
};








function InputComponent(props) {

    const idempleado=useRef();
    const usuario=useRef();
    const forma_pago=useRef();
    const producto=useRef();
    const cantidad=useRef();


    function handleSubmit(event) {
        event.preventDefault();
        const data = {
            "id_empleado": idempleado.current.value,
            "id_usuario": usuario.current.value,
            "id_forma_pago": forma_pago.current.value,
            "producto_id": producto.current.value,
            "cantidad": cantidad.current.value
        };
        axios.post('http://127.0.0.1:8000/pedido', data)
            .then(res => {
                handleClickSucess();
            })
            .catch(error => {
                console.log("ERROR");
                console.log(error.response.data["detail"]);
                handleClickError(error.response.data["detail"]);
            });
    }

  return (
    <div className="container">
      <div className="columns" />
      <div className="columns">
        <div className="column">
          <input className="input" type="number" placeholder="1 a 5 (empleados)" ref={idempleado}/>
        </div>
        <div className="column">ID Empleado</div>
      </div>
      <div className="columns">
        <div className="column">
          <input className="input" type="number" placeholder="1 a 20 (Usuarios)"  ref={usuario}/>
        </div>
        <div className="column">ID Usuario</div>
      </div>
      <div className="columns">
        <div className="column">
          <input className="input" type="number" placeholder="1 a 2 (Efectivo,Tarjeta)" ref={forma_pago}/>
        </div>
        <div className="column">ID Forma Pago</div>
      </div>
      <div className="columns">
        <div className="column">
          <input className="input" type="number" placeholder="1 al 20 (Productos)" ref={producto} />
        </div>
        <div className="column">Id Producto</div>
      </div>
      <div className="columns">
        <div className="column">
          <input className="input" type="number" placeholder="Cualquier monto" ref={cantidad}/>
        </div>
        <div className="column">Cantidad</div>
      </div>
      <div className="container has-text-centered">

        <button className="button" onClick={handleSubmit}>Enviar</button>



      </div>
    </div>
  );
}

export default InputComponent;
