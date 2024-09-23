import { assets } from '../../Assets/assets'
import AppDownload from '../AppDownload/AppDownload'
import './Footer.css'
let Footer = ()=>{
    return(
     <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo}></img>
                    <p>&copy; 2024 Your Food Company. Savor the best dishes and culinary delights. Contact us: (123) 456-7890 | email@example.com</p>
                       
                    <div className="footer-social-icons">
                        <div className="img" src={assets.facebook_icon}  ></div>
                        <div className="img" src={assets.twitter_icon}></div>
                        <div className="img" src={assets.linkedin_icon}></div>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>
                        Company
                       </h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>11230123923</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className='footer-copy-right'> Copyright 2024 &copy; Tomato.com - All Rights Reserved</p>
     </div>
    )
}


export default Footer