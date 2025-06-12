import '../assets/estilos/lenguajes.css'

export function Lenguajes() {
    return (
        <div className="container-languages">
            <h3 id="txt-lenguajes">LENGUAJES DE<br />PROGRAMACIÓN</h3>

            <div className="bloques-lenguajes">
                <nav className="navigation-languages">
                    <ul className="lenguajes-longer">
                        <li className="fila-lenguajes">
                            <span>- JAVA</span>
                            <span style={{ marginLeft: '20px' }}>- POSTGRESQL</span>
                        </li>
                        <li>- PYTHON</li>
                        <li>- JAVASCRIPT</li>
                        <li>- GIT</li>
                        <li>- GITHUB</li>
                        <li>- MYSQL</li>
                        <p>https://github.com/CarlEduardoJp19</p>
                    </ul>

                    <div className="Abilitys">
                        <h3 id="txt-ability">ABILITYS</h3>
                        <p>PORTUGUES</p>
                        <p>INGLES B1-B2</p>
                    </div>
                </nav>

                <div className="education">
                    <h3>EDUCACIÓN</h3>
                    <h4>Bachiller</h4>
                    <p>Instituto de Servicios Académicos IDESA</p>
                </div>
            </div>
        </div>
    )
}