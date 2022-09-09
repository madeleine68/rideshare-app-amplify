

function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

export async function _submitForm(values) {
    const { firstName, lastName } = values;
    const name = `${firstName} ${lastName}`;
    const {
      email,
      phone,
      password,
      category,
      make,
      model,
      year,
      kilometers,
      plateNum,
      licenceNum,
    } = values;
    const newValues = {
      name,
      email,
      phone,
      password,
      category,
      make,
      model,
      year,
      kilometers,
      plateNum,
      licenceNum,
    };
    await _sleep(1000);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/driver-register/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newValues, null, 2),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }



