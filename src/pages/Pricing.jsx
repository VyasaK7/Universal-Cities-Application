// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Very nominal pricing for a travel enthusiasts all over the world!
            Watch out for additional offers on hotels for your next travel
            destnation (for members only!)
          </p>
          <p>
            Sign Up for free and explore the app before signing up for the
            membership 🌏
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
