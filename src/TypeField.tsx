import React, { useRef, useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person: Person;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<Props> = ({ handleChange }) => {
  // const [count, setCount] = useState<number | null | undefined>(5);
  const [count, setCount] = useState<{ text: string }>({ text: "5" });

  // Type 'HTMLInputElement | undefined' is not assignable to type 'HTMLInputElement | null'.
  const inputRef = useRef<HTMLInputElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  return (
    <span ref={spanRef}>
      <input ref={inputRef} type="text" onChange={handleChange} />
    </span>
  );
};
