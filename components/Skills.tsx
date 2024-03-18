import React from 'react'
import Title from './Title'
import SkillsInput from "./SkillsInput";

function Skills() {
  return (
    <div>
        <Title text='.skills' />
        <div className="flex gap-4 flex-wrap   border-b-slate-700 " id='skills'>
            <SkillsInput
                title="Javascript"
                link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            />
            <SkillsInput title="Python" link="https://www.python.org/" />
            <SkillsInput title="SQL" link="https://en.wikipedia.org/wiki/SQL" />
            <SkillsInput
                title="HTML5"
                link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            />
            <SkillsInput
                title="CSS3"
                link="https://developer.mozilla.org/en-US/docs/Web/CSS"
            />
            <SkillsInput title="Postman" link="https://www.postman.com/" />
            <SkillsInput title="Grafana" link="https://grafana.com/" />
            <SkillsInput title="Kibana" link="https://www.elastic.co/kibana"/>
            <SkillsInput title="Flask" link="https://flask.palletsprojects.com/en/3.0.x/" />
            <SkillsInput title="APIs" link="https://en.wikipedia.org/wiki/API" />
            <SkillsInput title="Tailwindcss" link="https://tailwindcss.com/" />
            <SkillsInput
                title="NodeJS"
                link="https://nodejs.org/en"
            />
            <SkillsInput title="Git" link="https://git-scm.com/" />
            <SkillsInput title="Github" link="https://github.com/" />
            <SkillsInput title="Agile" link="https://www.atlassian.com/agile" />
        </ div>
    </div>
  )
}

export default Skills