import { useRef, useState } from 'react';
import styles from '../styles/components/FAQ.module.scss';
import Button from './utils/Button';
import SectionHeading from './utils/SectionHeading';
import SubHeading from './utils/SubHeading';

import { IoCaretDownCircle } from 'react-icons/io5';

const faqs = [
  {
    id: 0,
    header: 'What is Lorem Ipsum?',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
  {
    id: 1,
    header: 'What is Lorem Ipsum?',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
  {
    id: 2,
    header: 'Where does it come from?',
    text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
  },
  {
    id: 3,
    header: 'Why do we use it?',
    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`,
  },
  {
    id: 4,
    header: 'Where can I get some?',
    text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
  },
  {
    id: 5,
    header: 'Where does it come from?',
    text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
  },
];

function FAQ() {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <SectionHeading modifier="largeLeft">FAQ</SectionHeading>
        <SubHeading modifier="largeLeft">Frequently Asked Questions</SubHeading>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et
        </p>
        <Button modifier="secondary" href="#" type="button">
          Contact us
        </Button>
      </div>
      <Accordion />
      <div className={styles.btnContainer}>
        <Button modifier="secondary" href="#" type="button">
          Contact us
        </Button>
      </div>
    </section>
  );
}

export default FAQ;

function Accordion() {
  const [active, setActive] = useState<Number | null>(null);

  const handleToggle = (index: number) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };
  return (
    <div className={styles.card}>
      {faqs.map((faq, index) => {
        return (
          <AccordionItem
            key={index}
            active={active}
            handleToggle={handleToggle}
            faq={faq}
          />
        );
      })}
    </div>
  );
}

const AccordionItem = (props: any) => {
  const contentEl = useRef<any>();
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <div className={styles['rc-accordion-card']}>
      <div className={styles['rc-accordion-header']}>
        <div
          className={`${styles['rc-accordion-toggle']} ${
            active === id ? styles['active'] : ''
          }`}
          onClick={() => handleToggle(id)}
        >
          <h5 className={styles['rc-accordion-title']}>{header}</h5>
          <IoCaretDownCircle
            className={styles['rc-accordion-icon']}
            style={{ color: '2d83ee' }}
          />
        </div>
      </div>
      <div
        ref={contentEl}
        className={`${styles['rc-collapse']} ${
          active === id ? styles['show'] : ''
        }`}
        style={
          active === id
            ? { height: contentEl.current.scrollHeight }
            : { height: '0px' }
        }
      >
        <div className={styles['rc-accordion-body']}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
