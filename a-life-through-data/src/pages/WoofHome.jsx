import { Link } from "react-router-dom";

function WoofHome() {
    return (
        <div>
            <div>WOOF Home</div>
            <Link to="/woof/w-0001">Post 1.</Link>
            <Link to="/woof/w-0002">Post 2.</Link>
        </div>
    )
}

export default WoofHome;