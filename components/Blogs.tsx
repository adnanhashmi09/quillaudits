import Link from 'next/link';
import styles from '../styles/components/Blogs.module.scss';
import Button from './utils/Button';
import SectionHeading from './utils/SectionHeading';
import SubHeading from './utils/SubHeading';

function Blogs() {
  return (
    <section className={styles.section}>
      <SectionHeading>Blogs</SectionHeading>
      <SubHeading modifier="withButton">
        Lorem Ipsum
        <Button modifier="secondary" href="#" type="button">
          Read All
        </Button>
      </SubHeading>
      <BlogsContainer />
      <div className={styles.btnContainer}>
        <Button modifier="secondary" href="#" type="button">
          Read All
        </Button>
      </div>
    </section>
  );
}

export default Blogs;
const blogs = [
  {
    title: 'Lorem ipsum dolor sit amet, conseindexctetur adipiscing elit',
    date: '15 March 2020',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    image: '/blog.png',
    link: '#',
  },

  {
    title: 'Lorem ipsum dolor sit amet, conseindexctetur adipiscing elit',
    date: '15 March 2020',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    image: '/blog.png',
    link: '#',
  },
  {
    title: 'Lorem ipsum dolor sit amet, conseindexctetur adipiscing elit',
    date: '15 March 2020',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    image: '/blog.png',
    link: '#',
  },
];
function BlogsContainer() {
  return (
    <div className={styles.BlogsContainer}>
      {blogs.map((blog, index) => (
        <BlogItem
          key={`${index}_blog`}
          title={blog.title}
          date={blog.date}
          content={blog.content}
          image={blog.image}
          link={blog.link}
        />
      ))}
    </div>
  );
}

function BlogItem({ title, date, content, image, link }: any) {
  return (
    <div className={styles.blogItem}>
      <figure>
        <img src={image} alt="blog" loading="lazy" />
      </figure>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p className={styles.date}>{date}</p>
        <p className={styles.content}>{content}</p>
        <Link href={link} passHref>
          <a>Read More</a>
        </Link>
      </div>
    </div>
  );
}
