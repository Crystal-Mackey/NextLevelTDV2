import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import ReviewCard from './components/ReviewCard';
import ServiceCard from './components/ServiceCard';
import Gallery from './components/Gallery';
import VehicleTinting from "./components/media/VehicleTinting.jpg";
import MarineTinting from "./components/media/CommercialTiniting1.jpg";
import CommercialTinting from "./components/media/CommercialTiniting1.jpg";
import RVTinting from "./components/media/RVTinting.jpg";
import ResidentialTinting from "./components/media/ResidentialTinting1.jpg"
import Detailing from "./components/media/Detailing.jpg"
import Logo from "./components/media/logo.jpg"
import "./App.css";

const services = [
  {
    title: 'Auto Tinting',
    description: "Solar control tints for car windows manage the sun’s radiant energy, leading to cooler car interiors, reduced glare for better visibility, and a significant reduction in the harmful effects of ultraviolet light on both car interiors and human skin and eyes. Given that the sun emits ultraviolet light, visible light, and near-infrared radiation, our advanced films with pristine optical clarity are engineered to regulate these energy bands based on specific consumer needs. Depending on your preference, you can select films that: Exclusively block ultraviolet (UVA & UVB) rays. Diminish visible light for glare control and an enhanced car aesthetic. Shield against both UVA & UVB rays and the majority of solar infrared, providing heat reduction without altering the window's appearance.",
    imageUrl: VehicleTinting,
  },
  {
    title: 'Marine Tinting',
    description: "We offer window tinting services for all boat glass, regardless of your vessel's size. Our window tints are available in different shades to match your desired level of privacy or comfort. Tinting the windows of your yacht or other watercraft not only shields against damaging UV rays but also safeguards the interior and your belongings. Moreover, our marine window tints are scratch-resistant and won't disrupt any electronic devices, ensuring uninterrupted enjoyment during your time on the water.",
    imageUrl: MarineTinting,
  },
  {
    title: 'Commercial Tinting',
    description: "Commercial window tinting not only aids in decreasing your building's energy use but also imparts a sleek and professional appearance. We offer a range of tint shades from transparent to deep charcoal to seamlessly integrate with your structure. Our window film ensures a consistent appearance. For businesses seeking a glossy exterior to enhance solar heat rejection while maintaining interior privacy at night, a dual-reflective option is available. Inside the building, our tints can be used to enhance aesthetics and provide comfort and privacy in areas like offices, meeting rooms, dining spaces, and staircases.",
    imageUrl: CommercialTinting,
  },
  {
    title: 'Residendial Tinting',
    description: "Windows are crucial in controlling temperature and energy within your home. As per the EPA EnergyStar Buildings Manual, in the U.S., around half of the typical household's utility expenses are due to heat loss and gain through windows that haven't been treated. By deflecting solar heat from outside and balancing indoor temperature fluctuations, window films can contribute to reducing heating and cooling costs, while also preventing heat from leaking out.",
    imageUrl: ResidentialTinting,
  },
  {
    title: 'Custom Tinting',
    description: "Explore endless possibilities with our custom tinting services that cater to your unique needs. Whether it's enhancing privacy, adding a touch of elegance, or boosting energy efficiency, our custom window tints offer a world of potential.",
    imageUrl: RVTinting,
  },
  {
    title: 'Auto Detailing',
    description: "We understand that your car is more than just a vehicle; it's a statement of your personal style. Our expert team specializes in delivering top-notch auto detailing that transforms your car into a masterpiece of shine and cleanliness. From thorough interior cleaning to flawless exterior polishing, we use only the best products and techniques to ensure your vehicle looks its absolute best. Whether it's reviving the luster of an older model or maintaining the sparkle of a new one, we treat every car with the precision and care it deserves. Drive with pride and turn heads wherever you go.",
    imageUrl: Detailing,
  },
];

const reviews = [
  {
    customerName: 'Crystal Mackey',
    reviewText: 'Quick and efficient! Definitely recommend. Tint made vehicle look amazing and reduced heat inside greatly!',
    starRating: 5,
  },
  {
    customerName: 'Biltmore Commons',
    reviewText: 'Fit me right in! Great customer service fast plus quality = I will return and recommend! And the Detail wash after the tint was an extra bonus!',
    starRating: 5,
  },
  {
    customerName: 'Richelle M.',
    reviewText: "My daughter referred me to them and I'm so glad she did. Awesome work and so courteous.",
    starRating: 5,
  },
  {
    customerName: 'Most Wanted',
    reviewText: "The best in town",
    starRating: 5,
  },
  {
    customerName: 'Raymond Lebron',
    reviewText: "",
    starRating: 5,
  },
  // Add other reviews similarly
];

const galleryImages = [
  { src: 'path_to_image_1.jpg', alt: 'Description 1' },
  { src: 'path_to_image_2.jpg', alt: 'Description 2' },
  // Add more images as needed
];



function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="App">
      <div className="content-container"></div>
      <header><img src={Logo} alt="Logo" className="logo" />
        <h1>Next Level Window Tinting</h1>
      </header>
      <main><button onClick={callForQuote}>Call for Quote</button>
        <section id="services"><div className="services-grid">
        {services.map(service => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
          />
        ))}
      </div></section>
        
        <section id="reviews"><div className="review-section">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              customerName={review.customerName}
              reviewText={review.reviewText}
              starRating={review.starRating}
            />
          ))}
        </Slider>
      </div></section>
        {/* <section id="gallery"><Gallery images={galleryImages} /></section> */}
      </main>
      <footer>
        <p>Next Level Window Tinting</p>

       <p> <a
          href="https://www.google.com/maps/place/573+SW+Biltmore+St,+Port+St+Lucie,+FL+34983"
          target="_blank"
        >
          573 SW Biltmore St, Port St Lucie, FL 34983
        </a></p>
        <p><a href="tel:+17726262404">772-626-2404</a></p>
      </footer>
    </div>
  );
}

function callForQuote() {
  // Implement call logic or redirect
}

export default App;
