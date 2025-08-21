import axios from "axios";

const FetchingOnServerThirdParty = async () => {
  const result = await axios.get("https://randomuser.me/api/");

  console.log(result.data.results[0].email);

  return (
    <div>
      <h1>FetchingOnServerThirdParty</h1>
      <p>{result.data.results[0].email}</p>
    </div>
  );
};

export default FetchingOnServerThirdParty;
