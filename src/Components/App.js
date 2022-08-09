import "./App.css";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Section from "./Section/Section";

function App() {
    return (
        <div>
            <div className="main">
                <Header></Header>
                <Nav></Nav>
                <Section></Section>
            </div>
        </div>
    );
}

export default App;
