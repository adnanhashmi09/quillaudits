import { useRef, useState } from 'react';
import styles from '../styles/components/FAQ.module.scss';
import Button from './utils/Button';
import SectionHeading from './utils/SectionHeading';
import SubHeading from './utils/SubHeading';

import { IoCaretDownCircle } from 'react-icons/io5';

const faqs = [
  {
    id: 0,
    header: 'What is a Smart Contract Audit?',
    text: 'Smart Contract Audit is a comprehensive process to scrutinise a smart contract’s code that is used to interact with a cryptocurrency or blockchain. This process is carried out to discover errors, issues & security vulnerabilities in the code in order to rectify & fix them. It secures the code from potential future bugs.',
  },
  {
    id: 1,
    header: 'Who needs a Smart Contract Audit?',
    text: 'Smart Contract Audit is for everyone who is dealing with smart contracts; whether you have an ICO, STO, fintech, Games or any Dapp solution based on Smart Contract, you should go for a third-party Audit',
  },
  {
    id: 2,
    header: 'What is the time scale for an audit to complete?',
    text: 'The time span of an audit depends on the code size & the complexity of the project. A standard token (ERC20 & other ERC standards) can be audited within a week; on the other hand, complex DeFi projects, Blockchain wallets/dApps may stretch around a couple of weeks to a month.'
  },
  {
    id: 3,
    header: 'How much does a smart contract audit cost?',
    text: 'Our price varies from one smart contract to another. It depends on the complexity of functionalities and the lines of code in the smart-contract. We follow an intensive audit process by keeping the cost minimal to ensure maximum security. Request a free quote or contact our team, and we will get back to you with a feasible timeline and cost.'
  },
  {
    id: 4,
    header: 'Which blockchains do we audit?',
    text: 'We audit all major blockchains, which include Ethereum, Binance Smart Chain, Solana, Polygon(MATIC) , Polkadot, and many others.'
  },
  {
    id: 5,
    header: 'What Audit process do we follow?',
    text: 'We scan for vulnerabilities present in the system by running various test cases. We also conduct manual testing to verify the code for its intended use case. Apart from this, we also leverage in-house & open source security tools as per the smart contract’s framework.',
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
          className={`${styles['rc-accordion-toggle']} ${active === id ? styles['active'] : ''
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
        className={`${styles['rc-collapse']} ${active === id ? styles['show'] : ''
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
