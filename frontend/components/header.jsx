import '../assets/estilos/header.css'
import iconoAjuste from '../assets/img/icono-ajuste.png'
import pictEduar from '../assets/img/pict-Eduar.jpg'

export function Header(){
    return(
        <div className="container-header">
            <div className='container-foto-eduar'>
                <img src={pictEduar} alt="pict of eduar" className='pictEduardo'></img>
            </div>
            <img src={iconoAjuste} alt="icono de los ajustes" className='icono-ajustes'/>
            <div className='txt-eduar'>
                <h2>CARLOS EDUARDO JIMÉNEZ PERDOMO</h2>
                <h2>TECNÓLOGO EN ANALISIS Y<br /> DESARROLLO DE SOFTWARE</h2>
            </div>
        </div>
    )
}