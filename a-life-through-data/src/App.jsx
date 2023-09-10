import { Route, Routes } from "react-router-dom";
import WoofHome from "./pages/WoofHome";
import Post from "./pages/Post";


function App() {
    return (
        <Routes>
            <Route path="/" element={<h1>under construction</h1>}></Route>
            <Route path="/woof" element={<WoofHome />}></Route>
            <Route path="/woof/:id" element={<Post />}></Route>
        </Routes>
    )
}

export default App