export const dynamic = "force-dynamic";

const DynamicRenderingPage = () => {
  return (
    <div>
      <h1>DynamicRenderingPage</h1>
      <p>{new Date().toTimeString()}</p>
    </div>
  );
};

export default DynamicRenderingPage;
