import iconPhone from '../assets/img/icon-phonee.png'
import iconUbication from '../assets/img/icon-ubicationn.png'
import iconEmail from '../assets/img/icon-emaill.png'
import '../assets/estilos/infoEduar.css'

export function InfoEduardo(){
    return (
        <div className="container-infoPersonal">
            <div className='infoMia'>
                <nav>
                    <ul className='lista-personal'>
                        <div className='fila-superior'>
                            <li><img src={iconPhone} className='icons-personal'></img>3186512849</li>
                            <li><img src={iconEmail} className='icons-personal'></img>eduarjp2502@gmail.com</li>
                        </div>
                        <div className='fila-inferior'>
                            <li><img src={iconUbication} className='icons-personal'></img>Tolima - Ibagué</li>
                        </div>  
                    </ul>   
                </nav>
                <p className='txt-sobre-mi'>
                    <li>SOBRE MI</li>
                    Estudiante en proceso con habilidades en la creación de soluciones tecnológicas, desarrollo de aplicaciones. Capacidad para analizar y resolver problemas mediante el uso de lenguajes de programación asimismo con el manejo de Github y Git. Con conocimientos en bases de datos, estructuras de datos y metodologías ágiles para la gestión eficiente de proyecto. En lo personal, aptitud y actitud de liderazgo, desempeño interdisciplinario, ético, creativo y capacidad de gestión en las áreas tecnológicas. Me considero una persona responsable, dinámica, con deseo de superación, aspiraciones y gran interés en cumplir de manera eficiente las metas planteadas tras la consecución de objetivos. 
                </p>
            </div>
        </div>
    );
}