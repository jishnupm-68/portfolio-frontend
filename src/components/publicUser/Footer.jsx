
import { FaGithub } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router';
import EmailComponent from './contents/EmailComponent';
const Footer = () => {
  return (
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <Link to="https://github.com/jishnupm-68"><FaGithub className="text-2xl" /></Link>
          <Link to="https://leetcode.com/u/jishnupmbcr68/"><TbBrandLeetcode className="text-2xl" /></Link>
          <Link to="https://www.linkedin.com/in/jishnu-p-m-25b69b197"><FaLinkedin className="text-2xl" /></Link>
        </div>
      </nav>

      <form>
        <h5>Copyright © {(new Date()).getFullYear()} </h5>
        <h6 className="footer-title">Contact us</h6>
        <EmailComponent />
      </form>
      
    </footer>
  )
}

export default Footer