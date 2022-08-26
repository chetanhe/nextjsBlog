import { useEffect } from "react";

export default function ReviewCarousel({reviewData}){

    useEffect(()=>{
        
        var timer = setInterval(()=>{
            if(jQuery){
                clearInterval(timer);
                jQuery(".home-about-us .owl-carousel").owlCarousel({
                    loop: true,
                    margin: 20,
                    dots: false,
                    nav: false,
                    autoplay: true,
                    stagePadding: 40,
                    smartSpeed: 500,
                    autoplayTimeout: 10000,
                    responsive: {
                      0: {
                        items: 1,
                        stagePadding: 30,
                      },
                      768: {
                        items: 2,
                        stagePadding: 40,
                      },
                      1000: {
                        items: 2,
                      },
                    },
                  });
            }
        }, 1000);

        const cleanOwlCarousel = () => {
            clearInterval(timer);
            var owl = jQuery(".home-about-us .owl-carousel");
            owl.trigger("destroy.owl.carousel");
            owl.addClass("off");
        }

        return cleanOwlCarousel;
    }, []);

   return (
    <div className="owl-carousel">
        {
            reviewData.map((review, index)=>{
                return (
                    <div className="item" key={index}>
                        <span className="icon icon-quotes-open" />
                        <p dangerouslySetInnerHTML={{__html:review.cust_rev_feedback}}/>
                        <div className="quotes-footer">
                            <div className="quotes-detail">
                                <span className="name">{review.cust_rev_cust_name}</span>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
   ); 
}