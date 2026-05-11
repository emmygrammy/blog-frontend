import { Link } from 'react-router-dom';
import appstore from '../assets/appstore.svg';
import googleplay from '../assets/googleplay.svg';



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
          <h1 className="text-2xl font-heading font-bold text-secondary font-Poppins">LearnLiftApp</h1>
          <p className="text-white/80 mt-2 text-sm">A modern blog platform built for learning and sharing ideas.</p>
        </div>

           {/* lower part */}
         <div className="mt-8">
          <h3 className="text-lg font-semibold mb-3 text-secondary">Follow Us</h3>
          <div className="flex space-x-4 text-white/80">
            <a href="#" className="hover:underline">YouTube</a>
            <a href="#" className="hover:underline">WhatsApp</a>
            <a href="#" className="hover:underline">Facebook</a>
          </div>
        </div>


      </div>

       

          {/* column 2 */}
          <div className="col-span-1 md:px-16">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-secondary">Quick Links</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/blogs" className="hover:underline">Blogs</Link></li>
                <li><Link to="/about" className="hover:underline">About</Link></li>
                <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
          </div>
          {/* column 3  product help*/}
          <div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-secondary">Product Help</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
                <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>



          {/* column 4 */}
          <div className="col-span-1 ">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-secondary">Download Our App</h3>
              <p className="text-white/80 -mb-10">
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

