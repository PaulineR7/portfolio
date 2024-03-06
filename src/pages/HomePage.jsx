
import { Link } from "react-router-dom";
import "./style/HomePage.scss";

function HomePage() {
    return(
        <>
        

        <section className="bg-color">
            <div>
                <h1 className="title-name">Pauline Rémi</h1>
                <h2>Développeur Web et Web Mobile</h2>
                <ul>
                    <Link className="link-bio" to=''><li className="border-li">A propos</li></Link>
                    <Link className="link-bio" to=''><li className="border-li">Compétences</li></Link>
                    <Link className="link-bio" to=''><li className="border-li">Mes projets</li></Link>
                    <Link className="link-bio" to=''><li className="border-li">Mon CV</li></Link>
                </ul>
            </div>
            <div>
               <img className="image" src="assets/img/21728082_10211855351956739_9187946477717864246_n-removebg-preview.png" alt="" /> 
            </div>
        </section>

        <h2 className="title-section">Compétences</h2>
        <section className="skill">
            <div className="front">
                <h3 className="title-skill">Front-end</h3>
                <ul className="skill-ul">
                    <li className="li-skill">
                        <img className='logo-skill'src="assets/img/react-1.png" alt="" />
                        <h4>REACT</h4>
                    </li>
                    <li className="li-skill">
                        <img className="logo-skill" src="assets/img/javascript.png" alt="" />
                        <h4>JAVASCRIPT</h4>
                    </li>
                    <li className="li-skill">
                        <img className="logo-skill" src="assets/img/sass.png" alt="" />
                        <h4>SASS</h4>
                    </li>
                    <li className="li-skill">
                        <img className="logo-skill" src="assets/img/bootstrap.png" alt="" />
                        <h4>BOOTSTRAP</h4>
                    </li>
                    <li className="li-skill">
                        <img className="logo-skill" src="assets/img/html.png" alt="" />
                        <h4>HTML 5</h4>
                    </li>
                    <li className="li-skill">
                        <img className="logo-skill" src="assets/img/css.png" alt="" />
                        <h4>CSS 3</h4>
                    </li>
                </ul>
            </div>
            <div className="back">
                <h3 className="title-skill">Back-end</h3>
                <ul className="skill-ul">
                    <li className="li-skill">
                        <img className='logo-skill'src="assets/img/node-js.png" alt="" />
                        <h4>Node JS</h4>
                    </li>
                    <li className="li-skill">
                        <img className="logo-skill" src="assets/img/phpmyadmin.png" alt="" />
                        <h4>PHPMYADMIN</h4>
                    </li>
                    <li className="li-skill">
                        <img className="logo-skill" src="assets/img/mariadb.png" alt="" />
                        <h4>MARIADB</h4>
                    </li>
                    <li className="li-skill">
                        <img className="logo-skill" src="assets/img/sequelize.png" alt="" />
                        <h4>SEQUELIZE</h4>
                    </li>
                    <li className="li-skill">
                        <img className="logo-skill" src="assets/img/express.png" alt="" />
                        <h4>EXPRESS.JS</h4>
                    </li>
                    <li className="li-skill">
                        <img className="logo-skill" src="assets/img/mysql.png" alt="" />
                        <h4>MYSQL</h4>
                    </li>
                </ul>
            </div>
        </section>
        <h2 className="title-section">Mes projets</h2>
        <section className="my-project">
            <div>
                <h4>FortImagin</h4>
                <img src="" alt="" />
                <p></p>
            </div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <img src="" alt="" />
            </div>
        </section>

        <section className="cv">
            <div className="border-cv">
                <p>Téléchargez directement mon C.V ici</p>
                <Link className="border-link" to="">Télécharger</Link>
            </div>
        </section>

        </>
    )
}

export default HomePage;