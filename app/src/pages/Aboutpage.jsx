import logo from '../assets/logo.jpg'
import linkedin from '../assets/linkedin.webp'
import github from '../assets/github.png'
const Aboutpage = () => {
    return (
        <div className="about bg-#ededed">
            <div className="terms-conditions flex flex-col items-center justify-center gap-8 p-4">
                <h1 className="font-bold text-4xl">Terms and Conditions</h1>

                <p className='underline'>
                    <strong>Last Updated:</strong> November 1, 2026
                </p>

                <p>
                    Welcome to our platform. By accessing or using this website, you agree to be bound by
                    these Terms and Conditions. If you do not agree with any part of these terms, please do
                    not use the application.
                </p>

                <h2 className="font-bold">1. Account Registration &amp; User Accounts</h2>
                <ul>
                    <li>To access certain features (such as sending messages or managing profile settings), you may be required to register for an account.</li>
                    <li>Authentication is managed through third-party services (including Clerk). You are responsible for maintaining the confidentiality of your account credentials.</li>
                    <li>We reserve the right to suspend or terminate accounts that violate our terms or engage in malicious activity.</li>
                </ul>

                <h2 className="font-bold underline">2. Acceptable Use</h2>
                <p>When using this platform, including any messaging or communication features, you agree <strong>not</strong> to:</p>
                <ul>
                    <li>Send spam, abusive, offensive, threatening, or illegal content.</li>
                    <li>Attempt to exploit, probe, hack, or flood the messaging system or infrastructure.</li>
                    <li>Scrape, harvest, or reverse-engineer the source code or platform content without authorization.</li>
                </ul>

                <h2 className="font-bold underline">3. User-Generated Content</h2>
                <ul>
                    <li>Any messages, collaboration requests, or feedback you submit remain your responsibility.</li>
                    <li>By submitting a message or query, you grant us permission to read and reply to your communication.</li>
                    <li>We reserve the right to delete any content or messages deemed inappropriate or harmful.</li>
                </ul>

                <h2 className="font-bold underline">4. Intellectual Property</h2>
                <ul>
                    <li>All source code, design elements, branding, UI components, and platform features belong exclusively to the website operator.</li>
                    <li>Unauthorized copying, redistribution, or duplication of the platform's proprietary code or design is strictly prohibited.</li>
                </ul>

                <h2 className="font-bold underline">5. Limitation of Liability &amp; Disclaimers</h2>
                <ul>
                    <li>This platform and its services are provided on an <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> basis without warranties of any kind.</li>
                    <li>We do not guarantee uninterrupted server uptime or error-free performance.</li>
                    <li>Under no circumstances shall the platform or its developers be held liable for any data loss, service interruptions, or damages resulting from the use of the site.</li>
                </ul>

                <h2 className="font-bold underline">6. Changes to Terms</h2>
                <p>
                    We reserve the right to update or modify these Terms &amp; Conditions at any time.
                    Continued use of the website following any changes constitutes acceptance of the new terms.
                </p>

                <h2 className="font-bold underline">7. Contact Us</h2>
                <p>
                    If you have any questions regarding these Terms, you can reach out via the messaging
                    feature on our site or contact us directly.
                </p>
            </div>
            <div className="privacy-policy flex flex-col items-center justify-center gap-8 p-4 m-8">
                <h1 className="font-bold text-4xl underline">Privacy Policy</h1>

                <p>
                    <strong>Last Updated:</strong> November 1, 2026
                </p>

                <p>
                    Your privacy is important to us. This Privacy Policy outlines how we collect, use, and
                    protect your personal information when you use our application.
                </p>

                <h2 className="font-bold underline">1. Information We Collect</h2>
                <p>We collect minimal personal data necessary to provide a smooth user experience:</p>
                <ul>
                    <li><strong>Account Data:</strong> When you sign in (powered by Clerk), we collect basic profile details such as your name, email address, profile photo, and unique authentication IDs.</li>
                    <li><strong>Messages &amp; Queries:</strong> When you submit a developer query or collaboration request, we collect the text of your message, your email address, and any attached contact details.</li>
                    <li><strong>Technical &amp; Usage Data:</strong> Basic web traffic analytics, IP addresses, and browser details collected by host/deployment providers (e.g., Vercel) for performance and security purposes.</li>
                </ul>

                <h2 className="font-bold underline">2. How We Use Your Information</h2>
                <p>We use the collected information exclusively to:</p>
                <ul>
                    <li>Authenticate your account and grant access to user features.</li>
                    <li>Receive, display, and respond to your messages and collaboration requests.</li>
                    <li>Maintain platform security and prevent spam or abuse.</li>
                    <li>Improve site performance and overall developer user experience.</li>
                </ul>

                <h2 className="font-bold underline">3. Third-Party Services</h2>
                <p>We utilize trusted third-party service providers to run this application:</p>
                <ul>
                    <li><strong>Clerk:</strong> Handles user authentication and secure token management.</li>
                    <li><strong>Vercel / Hosting Provider:</strong> Hosts the web application and infrastructure APIs.</li>
                    <li><strong>Database / Email Providers:</strong> Used securely to store or route messages.</li>
                </ul>
                <p>
                    These third parties process data strictly in accordance with their respective privacy policies
                    and privacy laws. We <strong>do not sell, rent, or trade</strong> your personal data to advertisers
                    or third-party marketers.
                </p>

                <h2 className="font-bold underline">4. Data Security</h2>
                <p>
                    We implement standard security practices and rely on secure authentication protocols
                    (OAuth / JWT via Clerk) to protect your information. However, no data transmission over
                    the Internet can be guaranteed to be 100% secure.
                </p>

                <h2 className="font-bold underline">5. Your Data Rights</h2>
                <p>You have the right to:</p>
                <ul>
                    <li>Access the personal information stored about you.</li>
                    <li>Request the updating or correction of your profile data.</li>
                    <li>Request the deletion of your account and associated submitted messages.</li>
                </ul>

                <h2 className="font-bold underline">6. Changes to This Privacy Policy</h2>
                <p>
                    We may update our Privacy Policy from time to time. Any changes will be published directly
                    on this page with an updated revision date.
                </p>

                <h2 className="font-bold underline">7. Contact Information</h2>
                <p>
                    For privacy inquiries or requests regarding your personal data, please contact us through
                    the messaging section on the platform.
                </p>
            </div>
            <div className="about-us flex flex-col items-center justify-center p-8 m-8 gap-4">
                <h1 className="font-bold text-5xl">What We Do?</h1>
                <p><span className='font-bold'>ThinString</span> is a modern tech company dedicated to conceptualizing, designing, and building high-quality websites, <br /> applications, services, and digital products that are delivered at low to completely free prices. We bridge the gap between <br /> enterprise-grade performance and accessibility by engineering fast, reliable full-stack applications, developer <br /> tools, and workflow automation solutions using modern web technologies. By stripping away <br /> heavy corporate costs, we focus entirely on clean UI/UX, robust security, and seamless user experiences, ensuring that powerful and <br /> practical technology remains accessible to everyone.</p>
            </div>
            <div className="founder-section flex flex-col items-center justify-center p-8 gap-8">
                <div>
                <h1 className='font-bold text-5xl'>Founder</h1>
                </div>
                <div className="details flex gap-4">
                <div className="img flex flex-col items-center"><img src={logo}/><span className='font-bold'>Sarthak Kumar</span> <p>Hi! I am Sarthak! I am a Sofware engineer! I love to create products, <br /> apps, services with my fellow developers! to make people's life easier!</p>
                <div className='flex p-4 gap-4'>
                <a href="https://www.linkedin.com/in/sarthak-kumar-024b5b369/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFQtnxcW0R4OeGE1rMGSkEQ%3D%3D"><img src={linkedin} alt="" height={50} width={50} className='rounded-[100%]'/></a>
                <a href="https://github.com/sarthakcodes99"><img src={github} alt="" height={50} width={50} className='rounded-[100%]'/></a>
                </div>
                </div>
               
                </div>
            </div>
        </div>
    );
}

export default Aboutpage;