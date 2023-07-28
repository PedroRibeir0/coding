import MainButton from "../../components/MainButton";

export default function WebPages() {
  return (
    <section className="web-pages">
        <div className="texts">
            <h3>The language for building web pages</h3>
            <p>
            Go live on a fast, reliable, and hassle-free hosting network that scales with your business with one click and go code!
            </p>
            <MainButton  text={'try-yourself'} className={'web-pages-button'}/>
        </div>
        <div className="images">
            <img className="code-editor" src="/images/code-editor-2.svg" alt="code-editor" />
            <img className="caution-park-icon" src="/images/icon-park-caution.svg" alt="park-caution-icon" />
        </div>
    </section>
  )
}
