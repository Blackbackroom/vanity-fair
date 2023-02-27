import './App.css';
import ContactInformation from '../contactInformation/ContactInformation.js';

function App() {
    return (
        <div className="App">
            <div className="AppBody">
                <div className="AppBodyLeftColumn">
                    <div className="Tile ContactInformationTile">
                        <ContactInformation></ContactInformation>
                    </div>
                    <div className="Tile SkillsTile"></div>
                </div>
                <div className="AppBodyRightColumn">
                    <div className="Tile"></div>
                    <div className="Tile ExperienceTile"></div>
                    <div className="Tile"></div>
                </div>
            </div>
            <div className="AppFooter">
                <div className="Tile"></div>
            </div>
        </div>
    );
}

export default App;
