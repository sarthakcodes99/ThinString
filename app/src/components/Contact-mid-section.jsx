import logo from '../assets/logo.jpg'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.webp'
import mail from '../assets/mail.webp'
const Contact_mid_section = () => {
  return (
    <div className="midsection flex items-center justify-center gap-4">
        <div className="logo">
            <img src={logo} alt="" height={150} width={150}/>
        </div>
        <div className="info flex flex-col gap-2">
            <a href="https://asomlissicty@gmail.com"><img src={mail} alt="" height={40} width={40} className='rounded-full'/></a>
            <a href="https://www.linkedin.com/in/sarthak-kumar-024b5b369/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDXzVOMx3QZusSXvXPZvFyg%3D%3D">
            <img src={linkedin} alt="" height={40} width={40} className='rounded-full'/></a>
            <a href="https://github.com/sarthakcodes99"><img src={github} alt="" height={40} width={40} className='rounded-full'/></a>
        </div>
    </div>
  )
}

export default Contact_mid_section;