import { useEffect, useState } from "react";

export default function Timer() {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSec((s) => s + 1);
    }, 500+500);

    return () => clearInterval(id);
  }, []);

  return <p className="text-bold  text-center bg-blend-color-burn">{sec}</p>;
}
