import React, { Component }  from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import getm from './images/getm.jpg';
import iam from './images/iam.jpg';
import shedrack from './images/shedrack.jpg';

class TestimonalCarousel extends Component {
  constructor(props){
    super(props)


  }


  render(){
    return(
      <div className="row">
        <figure className="col-md-4 snip1192">
            <blockquote>We at Getmultimedia strongly believe that every piece of gear/equipment should always function just like the manufacturer intended, that's why we have always relied on the expertise of rockwaveengineering to achieve that goal. Be it repairs or maintenance they have consistently delivered without compromise.</blockquote>
            <div className="author">
              <img src={getm}  alt="Testimony from a client by name Benneth Umeh"/>
              <h5>Benneth Umeh <span> Getmultimedia</span></h5>
            </div>
        </figure>
        
        <figure className="col-md-4 snip1192 hover">
          <blockquote>My relationship with Rockwave Engineering is not the typical client-vendor relationship, they are a partner. They know and understand our business and needs. Their professionalism, knowledge and commitment are unmatched. Working with Rockwaveengineering Company over the last 13 years has given me the confidence to endorse their skill.</blockquote>
          <div className="author">
            <img src={iam} alt="Testimony from a client by name Sunday Madaki" />
            <h5>Sunday Madaki<span> Innate Arts and Media Nigeria.</span></h5>
          </div>
        </figure>
                
        <figure className="col-md-4 snip1192">
          <blockquote>Since I came across this company I have no regrets, my equipment is always in good shape. They are professional in maintenance of musical instruments, light and sound equipments. Good customer service, try them and you will never regret it.</blockquote>
          <div className="author">
            <img src={shedrack}  alt="Testimony from a client by name Shadrach Esami"/>
            <h5>Shadrach Esami<span> Musician </span></h5>
          </div>
        </figure>
      </div>
    );
  }
}

export default TestimonalCarousel;








//import {  Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

/*
const items = [
    {
      id: 1,
      altText: 'Slide 1',
      caption: 'My relationship with Rockwave Engineering is not the typical client-vendor relationship, they are a partner. They know and understand our business and needs. Their professionalism, knowledge and commitment are unmatched. Working with Rockwaveengineering Company over the last 13 years has giving me the confidence to endorse their skill.'
    },
    {
      id: 2,
      altText: 'Slide 2',
      caption: 'Since I came across this company I have no regrets, my equipment is always in good shape. They are professional in maintenance of musical instruments, light and sound equipments. Good customer service, try them and you will never regret it.'
    },
    {
      id: 3,
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ];
  
  class TestimonalCarousel extends Component {
    constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }
  
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
  
    render() {
      const { activeIndex } = this.state;
  
      const slides = items.map((item) => {
        return (
          <CarouselItem
            className="custom-tag"
            tag="div"
            key={item.id}
            onExiting={this.onExiting}
            onExited={this.onExited}
          >
            <CarouselCaption className="testiContent" captionText={item.caption}  />
          </CarouselItem>
        );
      });
  
      return (
        <div>
          <style>
            {
              `.custom-tag {
                  max-width: 100%;
                  height: 300px;
                  margin-bottom: 30px;
                  
                }`
            }
          </style>
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        </div>
      );
    }
  }
  
  export default TestimonalCarousel;

  /*
  
class TestimonalCarousel extends Component {
    constructor(props){
        super(props)

        this.onChange = this.onChange.bind(this);
        this.onClickItem = this.onClickItem.bind(this);

    }

    onChange(){

    }

    onClickItem(){

    }

    render(){
       
        return(
            <Carousel showThumbs={false} showArrows={false} autoPlay={true} interval={3000} transitionTime={450} infiniteLoop={true} swipeable={true} swipeScrollTolerance={5} dynamicHeight={true} stopOnHover={true} centerSlidePercentage={200} showStatus={false} onChange={this.onChange} onClickItem={this.onClickItem}>
                <div>
                   <p className="carouselContent">
                        My relationship with Rockwave Engineering is not the typical client-vendor relationship, they are a partner. They know and understand our business and needs. Their professionalism, knowledge and commitment are unmatched. Working with Rockwaveengineering Company over the last 13 years has giving me the confidence to endorse their skill.
                   </p>
                   <p  className="carouselContentSmall">
                       <strong>Sunday Madaki, </strong>
                       <small>Company</small>
                   </p>
                </div>
                <div>
                    <p className="carouselContent">
                        Since I came across this company I have no regrets, my equipment is always in good shape. They are professional in maintenance of musical instruments, light and sound equipments. Good customer service, try them and you will never regret it.
                    </p>
                    <p  className="carouselContentSmall">
                        <strong>Shadrach Esami, </strong>
                        <small>Company</small>
                    </p>
                </div>
                <div>
                    <p className="carouselContent">
                        
                    </p>
                    
                </div>
            </Carousel>
        );
    }
}


  */