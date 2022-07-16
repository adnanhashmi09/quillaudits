import SectionHeading from './utils/SectionHeading';
import SubHeading from './utils/SubHeading';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

import styles from '../styles/components/Portfolio.module.scss';
import sliderStyles from '../styles/components/Slider.module.scss';

// vendor imports
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import PortfolioCard from './PortfolioCard';

function Portfolio() {
  const { slider } = sliderStyles;
  const latestWorks = Array(10).fill('');
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <SectionHeading modifier="center">Portfolio</SectionHeading>
        <SubHeading modifier="white">Latest Work</SubHeading>
        <div className={styles.badgesContainer}>
          <div className={`${styles.badge} ${styles.active}`}> Ethereum </div>
          <div className={styles.badge}> Binance </div>
          <div className={styles.badge}> NFT </div>
          <div className={styles.badge}> Solana </div>
        </div>
        <div className={slider}>
          <Slider {...settings}>
            {latestWorks.map((el, i) => (
              <PortfolioCard key={`latest_${i}`} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

function SampleNextArrow(props: {
  className?: any;
  style?: any;
  onClick?: any;
}) {
  const { className, style, onClick } = props;
  const { nextArrow } = sliderStyles;
  return (
    <div
      className={`${className} ${nextArrow}`}
      style={{
        ...style,
        display: 'block',
      }}
      onClick={onClick}
    >
      <IoChevronForwardOutline style={{ color: '#fff' }} />
    </div>
  );
}

function SamplePrevArrow(props: {
  className?: any;
  style?: any;
  onClick?: any;
}) {
  const { className, style, onClick } = props;
  const { prevArrow } = sliderStyles;
  return (
    <div
      className={`${className} ${prevArrow}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <IoChevronBackOutline style={{ color: '#fff' }} />
    </div>
  );
}

export default Portfolio;
