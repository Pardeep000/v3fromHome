import { Suspense } from "react";
import LoaderSpinner from "src/components/shared/atoms/SpinnerLoader";

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) => (
  <Suspense fallback={<LoaderSpinner />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
