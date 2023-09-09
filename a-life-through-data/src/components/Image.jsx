import './Image.scss';

function Image({ src }) {

    const imgStyle = {
        backgroundImage: 'url(' + src + ')'
    }

    return (
        <div className='image-container'>
            <div className="image" style={imgStyle}></div>
        </div >
    )
}

export default Image