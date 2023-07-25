import MainButton from "../../components/MainButton";

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
        </div>
        <div className='second-frame'>
            <img className="italo-photo" src="/images/italo-melo-photo.svg" alt="a man photo" />
            <img className="code-editor" src="/images/code-editor-1.svg" alt="code-editor" />
            <div className="name-skill">
              <div className="out-ball">
                <div className="in-ball"></div>
              </div>
              <span className="name">Italo Melo (Fullstack dev)</span>
            </div>
            <img src="/images/icon-park-caution.svg" alt="" className="park-caution-icon" />
        </div>
    </section>
  )
}
