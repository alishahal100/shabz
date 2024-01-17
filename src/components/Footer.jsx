import "./css/footer.css";
import { BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
      <div className="background" />
      <div className="content flex  justify-center gap-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="title text-8xl">Let’s Talk</div>

          <div className="contact flex flex-row gap-3">
            <img className="w-50 h-50" alt="" src="/email.svg" />
            <div className="email">media@shabzalio.com</div>
            <img className="w-50 h-50" alt="" src="/whatsapp.svg" />
            <div className="phone">91 7510 622 616</div>
          </div>
        </div>
        <div className=" line   box-border w-[251px] h-px border-t-[1px] border-solid " />
        <div className="social flex flex-col gap-3 justify-center items-center ml-40">
          <div className="flex gap-3">
            <a href="#">
              <BsInstagram />
            </a>
            <a href="#">
              <BsLinkedin />
            </a>
          </div>
          <div className="flex gap-3">
            <a href="#">
              <BsFacebook />
            </a>
            <a href="">
              <img className="twitter" src="/twitter.svg" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-3  ">
      <div className="layer">
            <img className="group-layer" alt="Group layer" src="/first.png" />
            <img className="img" alt="Group layer" src="/second.png" />
          </div>
           <div className="relative   box-border w-[906.76px] h-px border-t-[1px] border-solid border-palegoldenrod-100" />
           <div className="right relative">Shabzalio © 2023</div>
      </div>
    </div>
    
  );
};

export default Footer;
