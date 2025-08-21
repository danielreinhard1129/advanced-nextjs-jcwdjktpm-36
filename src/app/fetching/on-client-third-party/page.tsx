"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const FetchingOnClientThirdParty = () => {
  const [email, setEmail] = useState<string>("");

  const getRandomUser = async () => {
    try {
      const result = await axios.get("https://randomuser.me/api/");
      setEmail(result.data.results[0].email);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomUser();
  }, []);

  return (
    <div>
      <h1>FetchingOnClientThirdParty</h1>
      <p>{email}</p>
    </div>
  );
};

export default FetchingOnClientThirdParty;
