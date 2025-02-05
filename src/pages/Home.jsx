import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AAImage from '../assets/AA.png';
import BackgroundImage1 from '../assets/aa1.png';
import BackgroundImage2 from '../assets/aa2.png';
import BackgroundImage3 from '../assets/aa3.png';
import BackgroundImage4 from '../assets/aa4.png';
import BackgroundImage5 from '../assets/aa5.png';

export default function Home() {
  const [activeButton, setActiveButton] = useState(0); // Start with button 0 active
  const [loadingProgress, setLoadingProgress] = useState(Array(5).fill(0));
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(BackgroundImage1);

  const sidebarContent = [
    { header: 'Vontos', text: 'Identity, strategy, and website for Vontos, revolutionizing education with innovative solutions for the nation’s schools.' },
    { header: 'ShippingCart', text: 'Strategy and mobile app redesign for ShippingCart, a shipping company simplifying online shopping with seamless international deliveries.' },
    { header: 'Dezu', text: 'Identity, strategy, and website for Dezu Technologies, delivering advanced solutions and trusted global brands to optimize operations and drive sustainable success in modern industries.' },
    { header: 'Caritas Don Bosco School', text: 'Strategy and website redesign for Caritas Don Bosco School, blending a minimalist aesthetic to reflect its heritage and modernize its digital presence.' },
    { header: 'Caritas Don Bosco School', text: 'Strategy and app design for Caritas Don Bosco School, empowering parents with tools to track performance, attendance, and schedules in real time.' }
  ];

  const backgroundImages = [
    BackgroundImage1,
    BackgroundImage2,
    BackgroundImage3,
    BackgroundImage4,
    BackgroundImage5
  ];

  useEffect(() => {
    // Set the first button as active on page load
    setActiveButton(0);
  }, []);

  useEffect(() => {
    if (activeButton !== null) {
      setSidebarVisible(true);

      const interval = setInterval(() => {
        setLoadingProgress((prev) => {
          const newProgress = [...prev];
          newProgress[activeButton] += 2;  // Adjust the increment speed as needed
  
          // Check if progress is 100% before moving to the next button
          if (newProgress[activeButton] >= 100) {
            newProgress[activeButton] = 100;  // Ensure it doesn't exceed 100%
            clearInterval(interval);  // Clear the interval once the progress is 100%
            
            // Delay before moving to the next button (after loading completes)
            setTimeout(() => {
              const nextButton = (activeButton + 1) % 5;
              handleButtonClick(nextButton);  // Switch to the next button
            }, 1000); // 1 second delay before switching button
          }

          return newProgress;
        });
      }, 100);  // Progress update interval (every 100ms for smoother effect)

      return () => clearInterval(interval);
    }
  }, [activeButton]);

  const handleButtonClick = (index) => {
    setActiveButton(index);
    setSidebarVisible(true);
    setBackgroundImage(backgroundImages[index]);
    setLoadingProgress((prev) => {
      const updatedProgress = Array(5).fill(0); // Reset all progress bars
      updatedProgress[index] = 0;
      return updatedProgress;
    });
  };

  const handleCloseSidebar = () => {
    setSidebarVisible(false);
    setActiveButton(null);
  };

  return (
    <div>
   <section
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '930px',
    position: 'relative',
  }}
>
  <img
    src={AAImage}
    alt="Top Left Image"
    style={{
      position: 'absolute',
      top: '0',
      left: '0',
      width: '58px',
      height: '50px',
      paddingTop: '40px',
      paddingLeft: '40px',
    }}
  />

  {/* Footer Text Section */}
  <div
    style={{
      position: 'absolute',
      bottom: '40px',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 20px',
    }}
  >
    <span
      style={{
        color:
          activeButton === 0 || activeButton === 3 || activeButton === 4
            ? 'black'
            : '#FFFFFF',
        fontSize: '20px', // Set font size to 20px
      }}
    >
      {activeButton === 0
        ? 'Vontos'
        : activeButton === 1
        ? 'Shippingcart'
        : activeButton === 2
        ? 'Dezu'
        : activeButton === 3
        ? 'Caritas Don Bosco School'
        : activeButton === 4
        ? 'Caritas Don Bosco School'
        : 'Vontos'}
    </span>
    <span
      style={{
        color:
          activeButton === 0 || activeButton === 3 || activeButton === 4
            ? 'black'
            : '#FFFFFF',
        textAlign: 'center',
        fontSize: '20px', // Set font size to 20px
      }}
    >
      {activeButton === 0
        ? 'Conceptualized and designed Vontos’ website.'
        : activeButton === 1
        ? "Conceptualized and redesigned ShippingCart’s mobile application."
        : activeButton === 2
        ? "Conceptualized and redesigned Dezu’s website."
        : activeButton === 3
        ? 'Conceptualized and redesigned CDBS’s website.'
        : activeButton === 4
        ? 'Conceptualized and designed CDBS’s parent application.'
        : 'Conceptualized and designed Vontos’ website.'}
    </span>
    <span
      style={{
        color: '#FFFFFF',
        textAlign: 'right',
        fontSize: '20px', // Set font size to 20px
      }}
    >
      LEARN MORE ------
    </span>
  </div>

  {/* Buttons Section */}
  <div
    style={{
      position: 'absolute',
      bottom: '0',
      width: '100%',
      display: 'flex',
      padding: '0',
    }}
  >
    {Array(5)
      .fill(null)
      .map((_, index) => (
        <button
          key={index}
          style={{
            backgroundColor: '#404040',
            color: '#FFFFFF',
            height: '16px',
            flex: '1',
            border: '2px solid black',
            outline: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            margin: '0',
            position: 'relative',
            overflow: 'hidden',
          }}
          onClick={() => handleButtonClick(index)}
        >
          <div
            style={{
              width: `${loadingProgress[index]}%`,
              height: '100%',
              backgroundColor:
                loadingProgress[index] > 0
                  ? index === 1 || index === 2
                    ? 'white'
                    : 'black'
                  : '#404040',
              position: 'absolute',
              top: '0',
              left: '0',
              transition: 'width 1s ease-in-out',
            }}
          ></div>
          {/* Button {index + 1} */}
        </button>
      ))}
  </div>

  {sidebarVisible && (
  <div
    style={{
      position: 'absolute',
      top: '0',
      right: '0',
      height: '98%',
      width: '480px',
      backgroundColor:
        activeButton === 0 || activeButton === 3 || activeButton === 4
          ? '#000000'
          : '#FFFFFF',
      transition: 'transform 0.3s ease',
      transform: 'translateX(0)',
      padding: '20px',
      boxSizing: 'border-box',
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        color: activeButton === 0 || activeButton === 3 || activeButton === 4
          ? 'white'  // Color white for button1, button4, and button5
          : 'black', // Default color for others
      }}
      onClick={handleCloseSidebar}
    >
      Back →
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '24px',
          fontWeight: '700',
          color: activeButton === 0 || activeButton === 3 || activeButton === 4
            ? 'white'  // Set color white for button1, button4, and button5
            : '#333',
          marginBottom: '20px',
        }}
      >
        {activeButton !== null ? sidebarContent[activeButton].header : ''}
      </h2>
      <p
        style={{
          fontSize: '16px',
          color: activeButton === 0 || activeButton === 3 || activeButton === 4
            ? 'white'  // Set color white for button1, button4, and button5
            : '#666',
          lineHeight: '1.5',
          maxWidth: '400px',
        }}
      >
        {activeButton !== null ? sidebarContent[activeButton].text : ''}
      </p>
    </div>
  </div>
)}
</section>





<section style={{ display: 'flex', height: '965px' }}>
      <div style={{ backgroundColor: '#f7f7f7', width: '940px', borderRight: '3px solid black', borderBottom: '3px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
  <p style={{ fontWeight: '700', fontSize: '20px', letterSpacing: '8px'  }}>GROWTH</p>
  <br />
  <p style={{ fontWeight: '600', fontSize: '16px', color: '#9B9A9A' }}>
  From pixel art to web design, branding, and app development. <br />
  Using data and analytics, they focus on creating designs that <br />
  engage audiences and deliver meaningful results.
  </p>
</div>


<div style={{ backgroundColor: '#f7f7f7', width: '940px', borderBottom: '3px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
  <p style={{ fontWeight: '700', fontSize: '20px', letterSpacing: '8px'  }}>CREATIVE</p>
  <br />
  <p style={{ fontWeight: '600', fontSize: '16px', color: '#9B9A9A' }}>
    Approaching creativity with emotion and purpose, crafting<br />
    visuals that resonate with users. From humble beginnings in <br />
    pixel art to refined modern interfaces, their work embodies a <br />
    balance of simplicity and innovation.
  </p>
</div>
      </section>







      {/* <section style={{ display: 'flex', height: '950px' }}>
        
      <div style={{ backgroundColor: '#f7f7f7', width: '940px', borderRight: '3px solid black', borderBottom: '3px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>

  <br />
  <p style={{ fontWeight: '600', fontSize: '16px', color: '#000000' }}>
  A graduate of De La Salle College of Saint Benilde with a <br />
  degree in Animation, this designer merges creativity and <br /> 
  strategy. They specialize in thoughtful, user-focused designs <br /> 
  that drive growth and bring bold ideas to life.
  </p>
  <br />
  <p style={{ fontWeight: '700', fontSize: '20px', color: '#000000', letterSpacing: '8px'  }}>
  DESIGNER <span style={{ color: '#9B9A9A', letterSpacing: '8px'  }}>AARONE OLAZO</span>
</p>
</div>
<div style={{ backgroundColor: '#f7f7f7', width: '940px', borderBottom: '3px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
</div>
      </section> */}


<section style={{ display: 'flex', height: '950px' }}>
        
        {/* <div style={{ backgroundColor: '#f7f7f7', width: '940px', borderRight: '3px solid black', borderBottom: '3px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
    <br />
    <p style={{ fontWeight: '600', fontSize: '16px', color: '#000000' }}>
    A graduate of De La Salle College of Saint Benilde with a <br />
    degree in Animation, this designer merges creativity and <br /> 
    strategy. They specialize in thoughtful, user-focused designs <br /> 
    that drive growth and bring bold ideas to life.
    </p>
    <br />
    <p style={{ fontWeight: '700', fontSize: '20px', color: '#000000', letterSpacing: '8px'  }}>
    DESIGNER <span style={{ color: '#9B9A9A', letterSpacing: '8px'  }}>AARONE OLAZO</span>
  </p>
  </div> */}


<div style={{ backgroundColor: '#f7f7f7', width: '940px', borderBottom: '3px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
  <p style={{ fontWeight: '700', fontSize: '20px', letterSpacing: '8px'  }}>MINDSET</p>
  <br />
  <p style={{ fontWeight: '600', fontSize: '16px', color: '#9B9A9A' }}>
  Design is the harmony of imagination and intention. When<br />
  creativity meets strategy, every project transforms into <br />
  something meaningful and memorable. 
  </p>
</div>
  
  
  <div style={{ backgroundColor: '#222222', width: '940px', borderBottom: '3px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
  </div>
        </section>













      {/* <section style={{ backgroundColor: '#EAD2A8', height: '940px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
  <p style={{ fontWeight: '400', fontSize: '20px', color: '#000000', letterSpacing: '8px' }}>Hit me up for a project</p>
  <a href="https://mail.google.com/" style={{ fontWeight: '600', fontSize: '20px', color: '#000000', letterSpacing: '8px', textDecoration: 'none' }}>olazoaarone@gmail.com</a>

  <br />
  <p style={{ fontWeight: '400', fontSize: '20px', color: '#000000', letterSpacing: '8px' }}>My Socials</p>
  <div style={{ display: 'flex', gap: '60px' }}>
    <a href="https://www.linkedin.com" style={{ fontWeight: '600', fontSize: '20px', color: '#000000', letterSpacing: '8px', textDecoration: 'none' }}>LinkedIn</a>
    <a href="https://www.instagram.com/" style={{ fontWeight: '600', fontSize: '20px', color: '#000000', letterSpacing: '8px', textDecoration: 'none' }}>Instagram</a>
  </div>


  <img src={AAImage} alt="Image" style={{ position: 'absolute', bottom: '20px', right: '20px', width: '58px', height: '50px', paddingBottom: "20px", paddingRight: "20px" }} />
</section> */}


<section style={{ backgroundColor: '#BC5A4D', height: '940px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
  <p style={{ fontWeight: '400', fontSize: '20px', color: '#000000', letterSpacing: '8px' }}>Want to Work Together?</p>
  <a href="https://mail.google.com/" style={{ fontWeight: '600', fontSize: '36px', color: '#000000', letterSpacing: '12px', textDecoration: 'underline' }}>olazoaarone@gmail.com</a>


  <img src={AAImage} alt="Image" style={{ position: 'absolute', bottom: '20px', right: '20px', width: '58px', height: '50px', paddingBottom: "20px", paddingRight: "20px" }} />
</section>





      {/* <section style={{ backgroundColor: '#222222', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <p style={{ fontWeight: '700', fontSize: '14px', color: '#ffffff', letterSpacing: '8px' }}>
    Designed by: Aarone Olazo
  </p>
</section> */}

<section style={{ 
  backgroundColor: '#222222', 
  height: '40px', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'space-between', 
  padding: '0 20px' 
}}>
  <p style={{ 
    fontWeight: '400', 
    fontSize: '12px', 
    color: '#ffffff',
    letterSpacing: '8px'
  }}>
    © 2024 – All Rights Reserved
  </p>
  <div style={{ 
    display: 'flex', 
    gap: '30px' 
  }}>
    <a href="https://linkedin.com" target="_blank" style={{ color: '#ffffff', textDecoration: 'none' }}>
      <i className="fab fa-linkedin" style={{ color: '#ffffff' }}></i>
    </a>
    <a href="https://instagram.com" target="_blank" style={{ color: '#ffffff', textDecoration: 'none', paddingRight: '30px' }}>
      <i className="fab fa-instagram" style={{ color: '#ffffff' }}></i>
    </a>
  </div>
</section>






      





     







    </div>
  );
}
