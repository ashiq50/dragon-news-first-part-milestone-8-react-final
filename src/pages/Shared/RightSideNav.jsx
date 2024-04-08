
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="space-y-3 p-4 mb-6">
                <h2 className="text-3xl font-semibold mb-3">Login with</h2>
                <button className="flex gap-3 items-center btn btn-outline">
                    <FaGoogle></FaGoogle>
                    Login with google</button>
                <button className="flex gap-3 items-center btn btn-outline">
                    <FaGithub></FaGithub>
                    Login with github</button>
            </div>
            {/* Find us on */}
            <div className=" p-4 mb-6">
                <h2 className="text-3xl font-semibold mb-3">Find us on</h2>
               <a className="p-4 flex items-center border rounded-t-lg" href="">
                <FaFacebook className="mr-4"></FaFacebook>
                Facebook
               </a>
               <a className="p-4 flex items-center border-x" href="">
                <FaTwitter className="mr-4"></FaTwitter>
                Twitter
               </a>
               <a className="p-4 flex items-center border rounded-b-lg" href="">
                <FaInstagram className="mr-4"></FaInstagram>
                Instagram
               </a>
            </div>
            {/* Q zone  */}
            <div className="space-y-3 p-4 mb-6">
                <h2 className="text-3xl font-semibold mb-3">Q-Zone</h2>
               <img src={qZone1} alt="" />
               <img src={qZone2} alt="" />
               <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;