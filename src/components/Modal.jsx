import cerrarBoton from '../img/cerrar.svg'
const Modal = ({setModal, animarModal, setAnimarModal}) => {
    const handleOcultarModal = ()=>{
        setAnimarModal(false)
        
        setTimeout(()=>{
            setModal(false)
        },500)

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
        <form className={`formulario ${animarModal ? "animar" :'cerrar' } `}>
            <legend>Nuevo Gasto</legend>
            <div className="campo">
                <label htmlFor="nombre">Nombre</label>
                <input
                    id="nombre"
                    type="text"
                    placeholder="Añade el nombre del gasto" />
            </div>
            
            <div className="campo">
                <label htmlFor="nombre">Cantidad</label>
                <input
                    id="cantidad"
                    type="text"
                    placeholder="Añade la cantidad del gasto" />
            </div>

        </form>
    </div>
  )
}

export default Modal