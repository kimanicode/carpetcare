import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { Link } from "react-router-dom"
// import Xicon from '../assets/twitter.png'
import { Image } from "@nextui-org/image"

const Footer = () => {
  return (
    <div className=' w-full px-10 py-5  bg-stone-800'>

        <div className="flex  flex-wrap text-white">
            <div className=" md:basis-1/2">
                <p className="font-bold text-primary py-3">Carpet Care</p>
                <span className="font-extralight py-6">
                     Carpet Care is a forward-thinking technology company <br />dedicated to delivering innovative solutions that drive <br /> business growth and efficiency.
                     
                </span>
                <div className="flex gap-3 py-3 text-black">
                    <div className="p-2 bg-gradient-to-r from-white to-gray-400 rounded-full"> <Linkedin/></div>
                    {/* <div className="p-2 bg-gradient-to-r from-white to-gray-400 rounded-full"> <Image src={Xicon} className=""/></div> */}
                    <div className="p-2 bg-gradient-to-r from-white to-gray-400 rounded-full"> <Facebook/></div>
                    <div className="p-2 bg-gradient-to-r from-white to-gray-400 rounded-full"> <Instagram/></div>  

                </div>
    
            </div>

            <div className="md:flex-row flex flex-col basis-1/2 justify-center gap-5  ">
                <div>
                    <p className="font-bold text-primary">Company</p>
                    {/* <ul className="font-extralight py-3">
                        <li><Link to='/about-us'>About Us</Link></li>
                        <li><Link to='/careers'>Careers</Link></li>
                        <li><Link to='/team'>Team</Link></li>
                        <li><Link to='/pricing'>Pricing</Link></li>
                        <li><Link to='contact-us'>Contact Us</Link></li>
                    </ul> */}
                </div>

                <div>
                    <p className="font-bold text-primary">Resources</p>
                    <ul className="font-extralight py-3">
                        
                        <li>Blog</li>
                        <li>Reports</li>
                    </ul>
                </div>

            </div>

        </div>


        <div className="h-[1px] w-full bg-danger my-3"></div>

        <div className="flex justify-between md:flex-row flex-col gap-5 text-white font-extralight ">

            <div className="flex gap-3  md:flex-row flex-col">
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>

            <div>
                <p> All rights reserved. &copy; {new Date().getFullYear()} Carpet Care. </p>

            </div>

        </div>

    </div>
  );
}

export default Footer
