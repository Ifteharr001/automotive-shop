
const Footer = () => {
    return (
      <div>
        <footer className="footer p-10 bg-[#222732] text-white">
          <aside>
            <img
              className="w-[100px] mx-auto"
              src="https://i.ibb.co/bzHqRJy/car-logo.png"
              alt=""
            />
            <h1 className="text-3xl font-bold text-[#ff4605] ml-5">
              GearGrove Autos
            </h1>
          </aside>
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    );
};

export default Footer;