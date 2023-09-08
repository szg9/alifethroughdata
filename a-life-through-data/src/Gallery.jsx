import './Gallery.scss';
import useFlourish from './UseFlourish';

const Gallery = props => {
    useFlourish('https://public.flourish.studio/resources/embed.js');

    return (
        <div className='gallery-container'>
            <div className="flourish-embed flourish-cards flourish-carousel" data-src={"visualisation/" + props.id}><script src="https://public.flourish.studio/resources/embed.js"></script></div>
        </div>

    )
}

export default Gallery