import Skill from "../organisms/Skill"
import jsImage from "../img/js.png"
import cssImage from "../img/css-3.png"
import scssImage from "../img/sass.png"
import reactImage from "../img/physics.png"
import htmlImage from "../img/html.png"
import csharpImage from "../img/c-sharp.png"
import sqlImage from "../img/sql.png"
import gitImage from "../img/github.png"
import cImage from "../img/c-.png"
import gScriptImage from "../img/secuencia-de-comandos-de-aplicaciones-de-google.png"
import reduxImage from "../img/redux.png"
import { FormattedMessage, useIntl } from "react-intl"

const Skills = () => {
    const intl = useIntl()
    const basicLevel = intl.formatMessage({ id: "skill.qualification-basic" })
    const intermediateLevel = intl.formatMessage({ id: "skill.qualification-intermediate" })
    const advancedLevel = intl.formatMessage({ id: "skill.qualification-advanced" })

    return (
        <section className="skills section-padding" id="skillsSection">
            <div className="wrapper center-content">
                <h2>
                    <FormattedMessage
                        id="skills.title"
                    /></h2>
                <p>
                    <FormattedMessage
                        id="skills.description"
                    />
                </p>
                <div className="cards-container l-60 m-80 center-block">
                    <Skill 
                        tecnology="JavaScript" 
                        level={intermediateLevel} 
                        image={jsImage} />
                    <Skill 
                        tecnology="CSS" 
                        level={intermediateLevel} 
                        image={cssImage} />
                    <Skill 
                        tecnology="SASS" 
                        level={intermediateLevel} 
                        image={scssImage} />
                    <Skill 
                        tecnology="React" 
                        level={intermediateLevel} 
                        image={reactImage} />
                    <Skill 
                        tecnology="Redux" 
                        level={intermediateLevel} 
                        image={reduxImage} />
                    <Skill 
                        tecnology="HTML5" 
                        level={advancedLevel}
                        image={htmlImage} />
                    <Skill 
                        tecnology="CSharp" 
                        level={basicLevel} 
                        image={csharpImage} />
                    <Skill 
                        tecnology="SQL" 
                        level={basicLevel} 
                        image={sqlImage} />
                    <Skill 
                        tecnology="GIT" 
                        level={intermediateLevel} 
                        image={gitImage} />
                    <Skill 
                        tecnology="C++" 
                        level={basicLevel} 
                        image={cImage} />
                    <Skill 
                        tecnology="GoogleScript" 
                        level={intermediateLevel} 
                        image={gScriptImage} />
                </div>
            </div>
        </section>
    )
}

export default Skills