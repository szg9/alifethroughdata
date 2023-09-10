import './Image.scss';

function Image({ url }) {
    return (
        <div className='image-container'>
            <div className="image" style={{ backgroundImage: 'url(' + url + ')' }}></div>
        </div >
    )
}

export default Image