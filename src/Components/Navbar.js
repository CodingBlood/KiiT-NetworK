import './stylesheets/navbar.css'
import Container from "./Container";

function Navbar(){

    return (
        <Container ClassName="stick">
            <div id="navbar"><div id="nav-tit">KiiT Network</div></div>
            <div id="navbar"><div id="nav-btn"><a href=" /"><span id="nav-btn-l">Trolls</span></a></div></div>
            <div id="navbar"><div id="nav-btn"><a href="/"><span id="nav-btn-l">News</span></a></div></div>
            <div id="navbar"><div id="nav-btn"><a href="/"><span id="nav-btn-l">Resources</span></a></div></div>
            <div id="navbar"><a href="/"><span id="nav-btn-r">&nbsp;</span></a></div>
            <div id="navbar"><div id="nav-btn"><a href="/"><span id="nav-btn-l">Login</span></a></div></div>
            <div id="navbar"><div id="nav-btn"><a href="/"><span id="nav-btn-l">Signup</span></a></div></div>
        </Container>
    );
}

export default Navbar;