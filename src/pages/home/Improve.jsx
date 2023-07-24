import MainButton from "../../components/MainButton";
import CodeEditor from "../../css/index/CodeEditor";


export default function Improve() {
  return (
    <section className='improve'>
        <div className='first-frame'>
            <h1>Improve your skills by <span className="code-icon">{'</>'}</span> study with coding</h1>
            <img src="/images/worm-icon.svg" alt="worm-icon" className='worm'/>
            <p>
            Create, launch, and iterate on new marketing campaigns without distracting your product team.
            </p>
            <MainButton text={'get ready'}/>
            <CodeEditor/>
        </div>
        <div className='second-frame'>
            
        </div>
    </section>
  )
}
