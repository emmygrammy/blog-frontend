import { Link } from 'react-router-dom';
import appstore from '../assets/appstore.svg';
import googleplay from '../assets/googleplay.svg';
import { FaYoutube, FaWhatsapp, FaFacebook } from "react-icons/fa";



export default function Footer() {
    return (
        <footer className="bg-primary  ">
           <div className="container mx-auto px-4 ">
             <Footer1 />
             <Footer2 />
        </div>
        </footer>
    )
}



export function Footer1(){
  return (
    <div className="grid grid-cols-1  mt-10 md:grid-cols-4 gap-8 ">
      {/* column 1 */}
      <div className="col-span-1">
        {/* upper part */}
        <div>
          <h1 className="text-2xl font-bold text-secondary font-heading ">LearnLiftApp</h1>
          <p className="text-white/90 font-sans mt-2 text-lg"
          >Lifting learners to develop a growth mindset and a lifelong love for learning.</p>
        </div>

           {/* lower part */}
         <div className="mt-8">
          <h3 className="text-lg font-bold mb-3 font-heading  text-secondary">Follow Us</h3>
          <div className="flex space-x-4 text-white/80">
                <a href="#" className="hover:text-red-500 transition">
                  <FaYoutube size={40} />
                </a>

                <a href="#" className="hover:text-green-500 transition">
                  <FaWhatsapp size={40} />
                </a>

                <a href="#" className="hover:text-blue-500 transition">
                  <FaFacebook size={40} />
                </a>
              </div>
        </div>


      </div>

       

          {/* column 2 */}
          <div className="col-span-1 md:px-16">
            <div>
              <h3 className="text-lg font-bold mb-3 font-heading  text-secondary">Quick Links</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/" className="hover:underline font-sans text-lg semibold text-white/90">Home</Link></li>
                <li><Link to="/blogs" className="hover:underline font-sans text-lg semibold text-white/90">Blogs</Link></li>
                <li><Link to="/about" className="hover:underline font-sans text-lg semibold text-white/90">About</Link></li>
                <li><Link to="/contact" className="hover:underline font-sans text-lg semibold text-white/90">Contact</Link></li>
              </ul>
            </div>
          </div>
          {/* column 3  product help*/}
          <div>
            <div>
              <h3 className="text-lg font-bold mb-3 font-heading  text-secondary">Product Help</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/contact" className="hover:underline font-sans text-lg semibold text-white/90">Contact</Link></li>
                <li><Link to="/faq" className="hover:underline font-sans text-lg semibold text-white/90">FAQ</Link></li>
                <li><Link to="/terms" className="hover:underline font-sans text-lg semibold text-white/90">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:underline font-sans text-lg semibold text-white/90">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>



          {/* column 4 */}
          <div className="col-span-1 ">
            <div>
              <h3 className="text-lg font-bold mb-3 font-heading  text-secondary">Download Our App</h3>
              <p className="text-white/90 -mb-10 font-sans text-lg">
                Get the latest updates and features by downloading our app.
              </p>


              {/* download button  apple store and play store*/}
             <div className="flex flex-col ">
                <a  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={appstore}
                    alt="Download on the App Store"
                    className="w-40"
                  />
                </a>

                {/* Google Play Store */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mt-10"
                >
                  <img
                    src={googleplay}
                    alt="Get it on Google Play"
                    className="w-40"
                  />
                </a>
              </div>



            </div>
          </div>
      </div>

  )
}

export function Footer2(){
  return (
    <div className=" text-lg text-white text-center mb-4 border-t-2 border-white/20 pt-6 mt-10">
       © {new Date().getFullYear()} LearnLiftApp. All rights reserved.
    </div>
  )
}

