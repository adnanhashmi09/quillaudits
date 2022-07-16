import styles from '../../styles/components/SectionHeading.module.scss';

function SubHeading({ children, modifier = '', style = {} }: any) {
  return (
    <h3 style={style} className={`${styles.subHeading} ${styles[modifier]}`}>
      {children}
    </h3>
  );
}

export default SubHeading;
