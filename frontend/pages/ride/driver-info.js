import Head from "next/head";
import App from "../../components/rideshare/Driver/App";

function driverInfo() {
  return (
    <div>
      <Head>
        <title>Driver Information</title>
        <meta name="description" content="ride share application" />
      </Head>
      <App />
    </div>
  )
}

export default driverInfo
