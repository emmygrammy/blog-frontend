import { Link } from 'react-router-dom';



export default function Footer() {
    return (
        <footer className="bg-primary font-popinsh ">
           <div className="container mx-auto px-4 ">
             <Footer1 />
             <Footer2 />
        </div>
        </footer>
    )
}



export function Footer1(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8">
      {/* column 1 */}
      <div className="col-span-1">
        {/* upper part */}
        <div>
          <h1>LearnLiftApp</h1>
          <p>A modern blog platform built for learning and sharing ideas.</p>
        </div>
           {/* lower part */}
         <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-white/80">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>


      </div>

       

          {/* column 2 */}
          <div className="col-span-2">
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/blogs" className="hover:text-white">Blogs</Link></li>
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>
          {/* column 3  product help*/}
          <div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Product Help</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>



          {/* column 4 */}
          <div className="col-span-1">
            <div>
              <h3 className="text-lg font-semibold mb-3">Download Our App</h3>
              <p className="text-white/80">
                Get the latest updates and features by downloading our app.
              </p>
            </div>
          </div>
      </div>

  )
}

export function Footer2(){
  return (
    <div className=" text-lg text-white text-center mb-4 border-t-2 border-white/20 pt-6">
       © {new Date().getFullYear()} LearnLiftApp. All rights reserved.
    </div>
  )
}

