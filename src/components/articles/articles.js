import { useState } from 'react';
import './articles.css';

const Articles = () => {

    const [articles] = useState ([

        {   
            image: "./assets/images/image-currency.jpg",
            title: "Receive money in any currency with no fees",
            subtitle: "By Claire Robinson",
            paragraph: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
            id:1
        },
        {
            image: "./assets/images/image-restaurant.jpg",
            title: "Treat yourself without worrying about money",
            subtitle: "By Wilson Hutton",
            paragraph: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
            id:2
        },
        {
            image: "./assets/images/image-plane.jpg",
            title: "Take your Easybank card wherever you go",
            subtitle: "By Wilson Hutton",
            paragraph: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
            id:2
        },
        {
            image: "./assets/images/image-confetti.jpg",
            title: "Our invite-only Beta accounts are now live!",
            subtitle: "By Claire Robinson",
            paragraph: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
            id:2
        }
        
    ]);

    return (
        
        <article  className = "article-wrapper">
            
            

                {articles.map(( article ) => (

                    <div className="article-content">
                        <div key = {article.id}> 
                            <img src={article.image} alt="easybank"></img>
                            <h6> {article.subtitle} </h6>
                            <h2> {article.title} </h2>
                            <p> {article.paragraph} </p>
                        </div>
                    </div>

                ))}

            


        </article>
    );
}

  




export default Articles;