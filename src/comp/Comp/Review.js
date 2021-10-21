import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Reviews extends Component{
    render() {
    return(
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        >
        <div>
          <img 
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--0SCWkYwS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/9dhr4cw2s0skgfig8qnw.png" 
          alt="review1"
          />
          <div className="myCarousel">
            <h3>Veronica Stork</h3>
            <p>
            Helpful ,neat , easy to use and lots of cats. totally loved it . Awesome work!
            </p>
          </div>
        </div>
        <div>
          <img 
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--nSI8V6RE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/81co8nilff5r9eer3xga.png" 
          alt="review2"
          />
          <div className="myCarousel">
            <h3>Daniel Martin</h3>
            <p>
            What an inspiring and mind-blowing project you've built here! Such a great idea Gaurav Tewari! I just love it!
            </p>
          </div>
        </div>
        <div>
          <img 
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--gRFMHqWs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1xwiaya5i7wweic3pz96.png" 
          alt="review3"
          />
          <div className="myCarousel">
            <h3>Theo Guardiola</h3>
            <p>
            Great App Gaurav Tewari, Very helpful. This will help me a lot when form submitting. Kudos 👏
            I really like the idea and the implementation is also so good. Keep up the good work bro! 🚀
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}

