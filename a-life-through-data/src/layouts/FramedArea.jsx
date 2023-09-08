import './FramedArea.scss';

function FramedArea({title, text}) {
    return (
        <section className="framed-area">
            <div className='box'>
                <p className='framed-title'>{title}</p>
                <p>{text}</p>
            </div>
        </section>
    )
}

export default FramedArea