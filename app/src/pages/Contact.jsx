import Contactheading from "../components/Contactheading"
import ContactMidSection from "../components/Contact-mid-section";
import Contact_para from "../components/Contact_para";
const Contact = () => {
    return(
        <div className="contact">
            <Contactheading />
            <ContactMidSection />
            <Contact_para />
        </div>
    )
}

export default Contact;