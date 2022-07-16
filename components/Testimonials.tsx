import styles from '../styles/components/Testimonials.module.scss';
import Button from './utils/Button';
import SectionHeading from './utils/SectionHeading';
import SubHeading from './utils/SubHeading';

function Testimonials() {
  return (
    <section className={styles.section}>
      <SectionHeading>TESTIMONIALS</SectionHeading>
      <SubHeading modifier="withButton">
        What our Clients are saying{' '}
        <Button modifier="secondary" href="#" type="button">
          Read All
        </Button>
      </SubHeading>
      <div className={styles.testimonialContainer}>
        <div>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua
          <div className={styles.user}>
            <figure>
              <img src="/user.png" alt="user" loading="lazy" />
            </figure>
            <div className={styles.text}>
              <h3>John Doe</h3>
              <p className={styles.content}>Lorem ipsum</p>
            </div>
          </div>
        </div>

        <div>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua
          <div className={styles.user}>
            <figure>
              <img src="/user.png" alt="user" loading="lazy" />
            </figure>
            <div className={styles.text}>
              <h3>John Doe</h3>
              <p className={styles.content}>Lorem ipsum</p>
            </div>
          </div>
        </div>

        <div>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua
          <div className={styles.user}>
            <figure>
              <img src="/user.png" alt="user" loading="lazy" />
            </figure>
            <div className={styles.text}>
              <h3>John Doe</h3>
              <p className={styles.content}>Lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.btnContainer}>
        <Button modifier="secondary" href="#" type="button">
          Read All
        </Button>
      </div>
    </section>
  );
}

export default Testimonials;
