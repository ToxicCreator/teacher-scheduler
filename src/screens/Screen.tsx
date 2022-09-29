import cc from "classnames";
import styles from "./ScreenStyle.module.css";


type Props = {
  rootClassName?: string,
  header?: React.ReactNode,
  children: React.ReactNode
};

function Screen(props: Props) {
  const {
    rootClassName,
    header,
    children
  } = props;
  return (
    <div className={cc(styles.root, rootClassName)}>
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