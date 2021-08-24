import './home.css';
import '../button/invButton.js'
import InvButton from '../button/invButton.js';
import Articles from '../articles/articles.js';

function Home () {

    return (
        <div>
        
        
            {/* Next Generation Wrapper  */}
        <section className="wrapper1">
           <div class="wrapper1-texts">
              <h1>Next generation digital banking</h1>
              <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <InvButton />
           </div>

           <div className="wrapper1-background">
               <img className="phones-background" src="./assets/images/bg-intro-desktop.svg" alt="easybank"></img>
               <img className="phones-image" src="./assets/images/image-mockups.png" alt="easybank"></img>
           </div>
        </section>



            {/* Why Choose Easybank Wrapper */}
            <section className="wrapper2">
            <div>
                <h2>Why choose Easybank?</h2>
                <p>We leverage Open Banking to turn your bank account into your financial hub. <br></br> Control 
                your finances like never before.</p>
            </div>

            <div class="wrapper2-flex">
                <div>
                    <img src="./assets/images/icon-online.svg"  alt="Online banking"></img>
                    <h3>Online Banking</h3>
                    <p>Our modern web and mobile applications allow you to keep track of your finances
                    wherever you are in the world.</p>
                </div>
                <div>
                    <img src="./assets/images/icon-budgeting.svg"  alt="Online banking"></img>
                    <h3>Simple Budgeting</h3>
                    <p>See exactly where your money goes each month. Receive notifications when you’re 
                    close to hitting your limits.</p>
                </div>
                <div>
                    <img src="./assets/images/icon-onboarding.svg"  alt="Online banking"></img>
                    <h3>Fast Onboarding</h3>
                    <p>We don’t do branches. Open your account in minutes online and start taking control 
                    of your finances right away.</p>
                </div>
                <div>
                    <img src="./assets/images/icon-api.svg"  alt="Online banking"></img>
                    <h3>Open API</h3>
                    <p>Manage your savings, investments, pension, and much more from one account. Tracking 
                    your money has never been easier.</p>
                </div>
            </div>
        </section>


             {/* Latest Articles */}
            <section className="wrapper3">
                <h2 class="title">Latest Articles</h2>
                <Articles />
            </section>
        



        </div>
    );

}


export default Home;


