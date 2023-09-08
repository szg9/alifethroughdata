import './Map.scss';
import useFlourish from '../hooks/UseFlourish';

const Map = props => {
    useFlourish('https://public.flourish.studio/resources/embed.js');

    return (
        <div className='map-container'>
            <iframe src={"https://flo.uri.sh/visualisation/" + props.id + "/embed"} title='Interactive or visual content' className='flourish-embed-iframe flourish-map' scrolling='no' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
        </div>
    )
}

export default Map