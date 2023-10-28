import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About Universal Cities.</h2>
          <p>
            We have all travelled to different places during our lives. Ever
            wondered how amazing it would be if you could keep a track of all
            the list of Cities and the Places that you've visited? Look no
            further as this application is the perfect place for you to keep a
            track of all the places you have been to and want to visit!
          </p>
          <p>
            Navigate to the Login section, create an account, and start
            exploring the world today!
          </p>
        </div>
      </section>
    </main>
  );
}
