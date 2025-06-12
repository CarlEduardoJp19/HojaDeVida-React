import '../assets/estilos/expLab.css'

export function Laboral() {
    return (
        <div className="container-laboral">
            <h3 className='txt-lab'>EXPERIENCIA LABORAL</h3>
            <h5 className='txt-lab' style={{ fontSize: '20px' }}>
                Aprendiz del SENA en Desarrollo de Software, me siento capacitado para desenvolverme en backend o frontend.
                Estoy preparado para asumir funciones durante mi etapa productiva, aportando mis conocimientos y desarrollando
                soluciones tecnológicas.
            </h5>

            <div className="contactos-laborales">
                <h3>REFERENCIAS</h3>
                <div className="contacto">
                    <p><strong>Juan Carlos Tole</strong></p>
                    <p>Tecnólogo electromecánico industrial</p>
                    <p>📞 3245959883</p>
                    <p>📧 Carlostole03@gmail.com</p>
                </div>
                <div className="contacto">
                    <p><strong>Jhon Alexander Jimenez</strong></p>
                    <p>Ingeniero Ambiental</p>
                    <p>📞 3164936911</p>
                    <p>📧 jhon_jimenezpe@fet.edu.co</p>
                </div>
                <div className="contacto">
                    <p><strong>José Alejandro Trujillo Bahamón</strong></p>
                    <p>Licenciatura en lenguas extranjeras con énfasis en inglés</p>
                    <p>📞 3168202271</p>
                    <p>📧 alexjoseph1876@gmail.com</p>
                </div>
                <div className="contacto">
                    <p><strong>Jhon Cuscue Silva</strong></p>
                    <p>Licenciatura en Ciencias Naturales y Educación Ambiental</p>
                    <p>📞 3193771804</p>
                    <p>📧 jhon.cuscue.silva@gmail.com</p>
                </div>
            </div>
        </div>
    )
}