import Router from "next/router";

export const saveData = async (inputValues, driverName) => {
    const { seats, amount, destination, origin, date } = inputValues;
    const to = destination.query;
    const from = origin.query;
    const parseDate = date.split("T");
    const leavingAt = parseDate[0];
    const leavingTime = parseDate[1];
    const name = driverName
  
    const values = { name, seats, amount, from, to, leavingAt, leavingTime };

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/trip`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values, null, 2),
    })
      .then((res) => {
        if (res.status === 200) {
           Router.push('/ride/success');
        }
      })
      .catch((err) => console.log(err))
  };