import styles from './ScreenStyle.module.css';


type Props = {
  header: React.ReactNode,
  children: React.ReactNode
};

function Screen(props: Props) {
  const {header, children} = props;
  return (
    <div className={styles.screenRoot}>
      {header && (
        <section className={styles.header}>
          {header}
        </section>
      )}
      <section className={styles.content}>
        {children}
      </section>
    </div>
  );
}

export default Screen;