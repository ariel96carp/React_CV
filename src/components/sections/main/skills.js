import Skill from "../cards/Skill"
import jsImage from "../../img/js.png"
import cssImage from "../../img/css-3.png"
import scssImage from "../../img/sass.png"
import reactImage from "../../img/physics.png"
import htmlImage from "../../img/html-5.png"
import csharpImage from "../../img/c-sharp.png"
import sqlImage from "../../img/sql.png"
import gitImage from "../../img/github.png"
import cImage from "../../img/c-.png"
import gScriptImage from "../../img/secuencia-de-comandos-de-aplicaciones-de-google.png"
import reduxImage from "../../img/redux.png"

const skillSection = () => {
    return (
        <section className="skills section-padding" id="skillsSection">
            <div className="wrapper center-content">
                <h2>Mis habilidades</h2>
                <p>
                    Conocimientos en lenguajes, frameworks y herramientas de trabajo.
                </p>
                <div className="cards-container l-60 m-80 center-block">
                    <Skill tecnology="JavaScript" level="Intermedio" image={jsImage} />
                    <Skill tecnology="CSS" level="Intermedio" image={cssImage} />
                    <Skill tecnology="SASS" level="Intermedio" image={scssImage} />
                    <Skill tecnology="React" level="Intermedio" image={reactImage} />
                    <Skill tecnology="Redux" level="Básico" image={reduxImage} />
                    <Skill tecnology="HTML5" level="Avanzado" image={htmlImage} />
                    <Skill tecnology="CSharp" level="Básico" image={csharpImage} />
                    <Skill tecnology="SQL" level="Básico" image={sqlImage} />
                    <Skill tecnology="GIT" level="Intermedio" image={gitImage} />
                    <Skill tecnology="C++" level="Básico" image={cImage} />
                    <Skill tecnology="GoogleScript" level="Intemedio" image={gScriptImage} />
                </div>
            </div>
        </section>
    )
}

export default skillSection