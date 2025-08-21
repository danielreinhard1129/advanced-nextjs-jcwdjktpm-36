const FetchingOnServerWithFetch = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const result = await response.json();

  return (
    <div>
      <h1>FetchingOnServerWithFetch</h1>
      <p>{result.results[0].email}</p>
    </div>
  );
};

export default FetchingOnServerWithFetch;
