import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Home from "../../components/rideshare/PostTrip/Home";

export default function Book() {

  return (
    <div className={styles.ride}>
      <Head>
        <title>Ride Share</title>
        <meta name="description" content="ride share application" />
      </Head>
      <Home /> 
    </div>
  );
}

