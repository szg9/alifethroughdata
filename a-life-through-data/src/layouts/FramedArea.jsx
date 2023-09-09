import './FramedArea.scss';

function FramedArea({ framedTitle, framedText }) {
    return (
        <section className="framed-area">
            <div className='box'>
                <p className='framed-title'>{framedTitle}</p>
                <p>{framedText}</p>
            </div>
        </section>
    )
}

export default FramedArea