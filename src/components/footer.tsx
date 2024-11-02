import logo from '../img/logo.svg'
import x from '../img/miniX.svg'
import tg from '../img/miniTG.svg'
import wp from '../img/wp.svg'

const Footer = () => {
    
    return (
        <div className="footer-wrapper">
            <div className="footer">
            <img src={logo} className="footer__logo" />
            {/* <div className="footer__text">
                Copyright 2024. LGP CASINO. All Rights Reserved.
            </div> */}
            <div className="footer__links">
                <a target="_blank" href="https://lgpdocs.gitbook.io/lucky-gap-casino" style={{marginRight: "8px"}}>
                    <img src={wp} alt="wp"/>
                </a>
                <a target="_blank" href="https://x.com/lgpcasino" style={{marginRight: "8px"}}>
                    <img src={x} alt="x"/>
                </a>
                {/* <a target="_blank" href="https://t.me/luckygapcasino">
                    <img src={tg} alt="tg"/>
                </a> */}
            </div>
            </div>
        </div>
        
    );
  };
  
export default Footer;