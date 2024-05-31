import './Hero.css';
import HeroIMG from '../assets/hero-section.png';

export const Hero = () => {
  return (
    <>
      <div className='hero-section'>
        <img src={HeroIMG} alt="Hero Section" />
        <div className='hero-text'>
          <p>Explore the <span className='highlight'>world</span> of sound</p>
          <button>Discover More</button>
        </div>
      </div>
      <div className='welcome-section'>
        <h2>Welcome to VibeHarbor</h2>
        <p>We are passionate about delivering high-quality sound experiences. Our collection of headphones and earbuds are designed to bring you closer to your music, and create a sound.</p>
      </div>
      <hr className="section-divider" />
    </>
  );
};
