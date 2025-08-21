import { Suspense } from "react";
import FastComponent from "./components/FastComponent";
import ReadyComponent from "./components/ReadyComponent";
import SlowComponent from "./components/SlowComponent";

export const dynamic = "force-dynamic";

const StreamingPage = () => {
  return (
    <div>
      <h1>StreamingPage</h1>

      <Suspense fallback={<p>Loading fast component</p>}>
        <FastComponent />
      </Suspense>

      <Suspense fallback={<p>Loading slow component</p>}>
        <SlowComponent />
      </Suspense>

      <ReadyComponent />
    </div>
  );
};

export default StreamingPage;
