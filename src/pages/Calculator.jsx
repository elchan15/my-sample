import x from "../component/Component";
import { useState } from "react";

export default function Calculator() {
  const [count, setCount] = useState(() => {
    return 0;
  });

  return (
    <>
      <x.MyDiv className="myDiv">
        <x.MyButton func={() => setCount((y) => y + 1)}>Plus</x.MyButton>
        <p>{count}</p>
        <x.MyButton func={() => setCount((y) => y - 1)}>Minus</x.MyButton>
      </x.MyDiv>
    </>
  );
}
