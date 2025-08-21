const FastComponent = async () => {
  // simulated fast data fetching
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 sec delay

  return <div>FastComponent</div>;
};

export default FastComponent;
