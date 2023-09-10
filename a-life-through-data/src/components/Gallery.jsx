import "./Gallery.scss";

function Gallery({ images }) {
    return (
        <div className="gallery-container">
            {images.map((url) =>
                <div className="gallery-image" style={{ backgroundImage: 'url(' + url + ')' }}></div>
            )}
        </div>
    )
}

export default Gallery