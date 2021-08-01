import React from "react";
import { useState } from "react";

interface Props {
  children: (
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
  ) => null | JSX.Element;
}

export const Counter: React.FC<Props> = ({ children }) => {
  const [count, setCount] = useState(0);
  return <div>{children(count, setCount)}</div>;
};
