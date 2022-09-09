import { useEffect, useState } from "react";

export const  useDriver = () => {
    const [driverName, setDriverName] = useState("");
    
    useEffect(() => {
      (async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/drivers/user`, {
            credentials: "include",
          });
    
          const content = await response.json();
          setDriverName(content.name);
        } catch (e) {
          console.log(e);
        }
      })();
    }, []);
    return { driverName }
  }

  