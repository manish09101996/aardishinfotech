import Image from "next/image";
import "@/styles/footer.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
        <div className="col-sm-3">
          <div className="logo">
            <Link href="/">
            <Image
              src="/logo.png"
              width={162}
              height={60}
              alt="Site Logo"
              priority
            />
            </Link>
          </div>
        </div>

      <div className="col-sm-3">
        <h3>QUICK LINKS</h3>
        <nav>
          <ul>
             <li><Link href="/about">About us</Link></li>
                 <li><Link href="/services">Services </Link></li>
                  <li><Link href="/how-it-works">How It Works</Link></li>
                    <li><Link href="/contact">Contact Us </Link></li>
          </ul>
        </nav>
        </div>
        <div className="col-sm-3 contact">
            <h3>CONTACT</h3>
            <Link href="mailto:info.aardishinfotech.com">info.aardishinfotech.com</Link>
            <Link href="tel:8054071080">8054071080</Link>
            <p>Social Links</p>
            <ul>
                <li><Link href="#">
              <Image
              src="/fb.png"
              width={30}
              height={30}
              alt="facebook"
            />
            </Link></li>
                  <li><Link href="#"><Image
              src="/twt.png"
              width={30}
              height={30}
              alt="twitter"
            /></Link></li>
                    <li><Link href="#"><Image
              src="/insta.png"
              width={30}
              height={30}
              alt="instagram"
            /></Link></li>
                      <li><Link href="#"><Image
              src="/linkdin.png"
              width={24}
              height={24}
              alt="linkdin"
            /></Link></li>
            </ul>
        </div>
        <div className="col-sm-3">
            <div className="newsletter">
                <h3>Sign Up to our Newsletter!</h3>
                <div className="form">
                    <form>
                        <div className="input-group">
                            <input type="email" placeholder="Email address" />
                            <button type="button">Book a Demo</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="col-sm-12 copyright">
                <div className="col-md-6">
                    <p>© AardshishInfotech 2026. All rights reserved</p>
                </div>
                <div className="col-md-6">
                   <ul>
                    <li><Link href="#">Privacy Policy</Link></li>
                     <li><Link href="#">Terms & Conditions</Link></li>
                   </ul>
                </div>
            
        </div>
        </div>
      </div>
    </footer>
  );
}
