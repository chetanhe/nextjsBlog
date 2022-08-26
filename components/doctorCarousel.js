import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function DoctorCarousel({doctorsData, initData}){

    useEffect(()=>{
        var timer = setInterval(()=>{
            if(jQuery){
                clearInterval(timer);
                jQuery(".doctor-section .owl-carousel").owlCarousel({
                    loop: true,
                    margin: 20,
                    dots: true,
                    nav: false,
                    autoplay: true,
                    animateIn: "fadeIn",
                    animateOut: "fadeOut",
                    smartSpeed: 500,
                    autoplayTimeout: 8000,
                    mouseDrag: false,
                    responsive: {
                      0: {
                        items: 1,
                        stagePadding: 30,
                      },
                      768: {
                        items: 1,
                      },
                      1000: {
                        items: 1,
                      },
                    },
                  })
            }
        }, 1000);

        const cleanOwlCarousel = () => {
            clearInterval(timer);
            var owl = jQuery(".doctor-section .owl-carousel");
            owl.trigger("destroy.owl.carousel");
            owl.addClass("off");
        }

        return cleanOwlCarousel;

    }, []);

    return (
        <div className="owl-carousel owl-theme">
            {
                doctorsData.map((doctor, index)=>{
                    return (
                        <div className="row" key={index}>
                            <div className="col-lg-4 col-md-5">
                                <div className="dr-bx-left">
                                    <div className="dr-img">
                                        <Image src={`${initData.DOCTOR_IMAGE_URL}/${doctor.ud_site_profile_image}`}   height="200" width="200" />
                                    </div>
                                    <div className="dr-details">
                                        {
                                            doctor.ud_profile_page_url 
                                            ? <Link href={doctor.ud_profile_page_url}><a>{doctor.user_nick_name}</a></Link> 
                                            : <span>{doctor.user_nick_name}</span>   
                                        }
                                        {
                                            initData.TXT_GMC_REG.trim() != ''
                                            ? <span>{doctor.ud_designation}<br/>{doctor.ud_gmc_number}</span>
                                            : <span>{doctor.ud_designation}<br/>{doctor.registrationInfo.label}:{doctor.registrationInfo.value}</span>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7">
                                <div className="dr-bx-right">
                                    <p dangerouslySetInnerHTML={{__html:doctor.description}}></p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}