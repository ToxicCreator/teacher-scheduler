import Header from "components/header/Header";
import NavigationBar from "components/navigation-bar/NavigationBar";
import styles from "./MainLayout.module.css";

type Props = {
  children: React.ReactNode;
};

function MainLayout(props: Props) {
  const {children} = props;
  return (
    <>
      <header>
        <Header teacherName={"Русаков А.М."} />
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer>
        <NavigationBar />
      </footer>
    </>
  );
}

export default MainLayout;
