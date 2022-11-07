import { useGlobalContext } from "./Context";
import phoneImg from "./images/phone.svg"
const FirstPage = () => {
    const {closeSub} = useGlobalContext();

    return (  
        <section className="containerFP" onMouseEnter={closeSub}>
            <div className="containerBoot m-auto d-flex align-center flexac">
                <div className="leftSide">
                    <h1 className="col-222 mb-20">Payments infrastructure for the internet</h1>
                    <p className="mb-12">Millions of companies of all sizes-from startups to Fortune 500s-use Stripe's 
                    software and APIs to accept payments, send payouts, and manage their businesses online</p>
                    <button className="btn">Start now</button>
                </div>


                <div className="rightSide">
                    <img src={phoneImg} alt="Phone" />
                </div>
            </div>
        </section>
    );
}
 
export default FirstPage;