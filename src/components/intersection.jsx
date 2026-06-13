import { useEffect, useRef, useState } from "react";
const arr = [1, 2, 3, 4, 5, 6, 66, 1, 2, 3, 4, 5, 6, 66];

export default function Inter() {
  const [data, setData] = useState(arr);
  const ref = useRef();

  const fetchMore = () => {
    const newData = [];
    for (let i = 0; i < 5; i++) {
      newData.push(crypto.randomUUID());
    }
    setData((prev) => [...prev, ...newData]);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            fetchMore();
          }, 300);
          console.log("Visible");
        }
      },
      {
        threshold: 1,
      },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-72 border border-amber-500 w-50">
      <div className="grid grid-flow-row overflow-auto scrollbar-track-transparent scrollbar-thumb-zinc-500 h-full scrollbar-thin ">
        {data?.map((i) => (
          <div className="h-10 ">{i}</div>
        ))}

        <div ref={ref} className="h-16 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}
