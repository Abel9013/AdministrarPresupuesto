import { useState } from 'react'
import cerrarBoton from '../img/cerrar.svg'
import Mensaje from './Mensaje'

const Modal = ({setModal, animarModal, setAnimarModal,  guardarGasto}) => {

    const [mensaje, setMensaje] = useState('')
    const [nombre,setNombre] = useState('')
    
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')


    const handleOcultarModal = ()=>{
        setAnimarModal(false)
        
        setTimeout(()=>{
            setModal(false)
        },500)

    }   
    const handleSubmit = e=>{
        e.preventDefault()

        if([nombre, cantidad, categoria].includes('')){//Si alguno de los 3 esta vacio 
            setMensaje('Todos los campos son obligatorios')
            setTimeout(()=>{
                setMensaje('')
            }, 3000)
            return;
        }
        guardarGasto({nombre, cantidad, categoria})
    }
  return (
    <div className='modal'>
        <div className="cerrar-modal">
            <img 
                src={cerrarBoton} 
                alt="Boton de cerrar"
                onClick={handleOcultarModal} 
            />
        </div>
        <form
             onSubmit={handleSubmit}
             className={`formulario ${animarModal ? "animar" :'cerrar' } `}>

            <legend>Nuevo Gasto</legend>
            {mensaje && <Mensaje tipo="error" >{mensaje}</Mensaje> }
            <div className="campo">
                <label htmlFor="nombre">Nombre Gasto</label>
                <input
                    id="nombre"
                    type="text"
                    placeholder="Añade el nombre del gasto"
                    value={nombre}
                    onChange= { e => setNombre(e.target.value)} />
            </div>
            
            <div className="campo">
                <label htmlFor="nombre">Cantidad</label>
                <input
                    id="cantidad"
                    type="text"
                    placeholder="Añade la cantidad del gasto"
                    value={cantidad}
                    onChange = { (e)=>{setCantidad(Number(e.target.value))} } />
            </div>
       
            <div className="campo">
                <label htmlFor="nombre">Categoria</label>
                <select
                    id="categoria"
                    value={categoria}
                    onChange = { (e)=>setCategoria(e.target.value) } 
                 >
                    <option value="">--Seleccione--</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="gastos">Gastos varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>

                </select>
            </div>
            <input 
                type="submit"
                value="añadir Gasto"
                />
        </form>
    </div>
  )
}

export default Modal