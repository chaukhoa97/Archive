import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren<any> {
  requiredString: string;
  optionalBoolean?: boolean;
}

// Không có children trong Props nhưng vẫn add dc
const MyComponent = ({ children }: Props) => {
  return <h1>{children}</h1>;
};

export default MyComponent;

<MyComponent />;
