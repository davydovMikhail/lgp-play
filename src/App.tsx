import { useEffect } from 'react'
import Logo from "./img/logo.svg";
import Person from "./img/person.svg";
import Info from './components/info';
import Segment from './components/segment';
import Table from './components/table';
import Tabs from './components/tabs';
import Footer from './components/footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useTypedSelector } from './storeHooks/useTypedSelector';
import { useActions } from "./storeHooks/useActions";
declare const window: any;

function App() {
  const { address } = useTypedSelector(state => state.main);
  const { SetAddress } = useActions();


  const getProvider = () => {
    if ('phantom' in window) {
      const provider: any = window.phantom?.solana;
  
      if (provider?.isPhantom) {
        return provider;
      }
    }
    window.open('https://phantom.app/', '_blank');
  };

  let provider = getProvider();

  useEffect(() => {
    if(provider) {
        provider.on("connect", () => {
          SetAddress(provider.publicKey.toString());
        });
        provider.on("disconnect", () => {
          SetAddress(null);
        });
    }
  }, [provider]);

  async function activateBrowserWallet() {
    try {
        await provider.connect();
    } catch (err) {
        window.open('https://phantom.app/', '_blank');
        console.log(err);
    }
  }
  
  return (
    <>
      <main>
        <div className="header-wrapper">
          <div className="header">
            <div className="header__left">
              <img src={Logo} className="header__logo" />
            </div>
            <div className="header__right">
              <a 
                target="_blank" href="https://raydium.io/swap/?inputCurrency=sol"
                className="button__size button__transparent header__claim"
              >
                <div>
                  Buy Tokens
                </div> 
              </a>
              {address ? 
                <div className="button__size button__transparent">
                  <img style={{marginRight: "10px"}} src={Person} alt="Person" />
                  <div>
                  {address?.slice(0, 5)}...{address?.slice(-2)}
                  </div>
                </div> 
                :
                <div style={{cursor: "pointer"}}  onClick={() => activateBrowserWallet()} className="button__size button__style">
                  <div>Connect Wallet</div> 
                </div>
              }
            </div>
          </div>
        </div>
        <div className="bg-wrapper">
          <div className="base">
            <Info />
            <Segment/>  
          </div>
        </div>
        <div className="table-wrapper">
          <Tabs />
          <Table />
        </div>
        <Footer />
      </main>
      <ToastContainer/>
    </>
  );
}

export default App;