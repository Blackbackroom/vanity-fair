import './ContactInformation.css';
import photo from './PhotoViktor.png';

function ContactInformation() {
    return (
        <div className="ContactInformation">
            <div className="Photo">
                <img src={photo} width="100%" alt="Saranchuk Viktor" className="Image" />
                <h3 className="ImageText">Viktor Saranchuk</h3>
            </div>

        </div>
    );
}

export default ContactInformation;