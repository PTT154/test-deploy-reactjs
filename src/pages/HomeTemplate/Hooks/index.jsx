import { useState, useEffect, useMemo, useCallback } from "react";
import Child from "./child";
import Fruit from "./fruit";

export default function Hooks() {
  const [count, setCount] = useState(0);
  const [fruits, setFruits] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" }
  ])
  console.log("Hook component rendered");

  const getListData = () => {
    console.log("Request toi server lay data");
  }

  const getListDataByCount = () => {
    console.log(`Request to server lay data theo count: ${count}`);
  }

  useEffect(() => {
    console.log("useEffect chạy sau khi component render xong - và chạy 1 lần duy nhất - nếu mảng rỗng []");

    getListData();
  }, []);

  useEffect(() => {
    console.log("useEffect này sẽ chạy mỗi khi count thay đổi");
    getListDataByCount();
  }, [count]);

  useEffect(() => {
    //Cứ 1s sẽ in ra 1 lần
    const interval = setInterval(() => {
      console.log("Hello Phuoc");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log('Component destroy');
    }
  }, []);

  const renderCountUp = () => {
    let i = 0;
    while (i < 1000) {
      i++;
    }

    console.log("Sau 1000 lần lặp => có được số " + i);

    return i;
  }

  const memoizedCountUp = useMemo(() => renderCountUp(), []);


  const renderNoti = () => {
    console.log("Render thông báo");
  }

  const memoizedRenderNoti = useCallback(renderNoti, []);


  const handleDeleteFruit = (id) => {
    const newFruits = fruits.filter((fruit) => fruit.id !== id);
    setFruits(newFruits);

    //Cách 2
    // setFruits(prevFruits => prevFruits.filter(fruit => fruit.id !== id));
    // Không cần truyền fruits vào trong dependency array của useCallback
  };

  const memoizedHandleDeleteFruit = useCallback(handleDeleteFruit, [fruits]);

  return (
    <div>
      <div>*Hooks</div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <h2>Count Up: {memoizedCountUp}</h2>

      <hr />

      <Child renderNoti={memoizedRenderNoti} />

      <hr />

      {fruits.map((fruit) =>
      (
        <Fruit key={fruit.id} data={fruit} onDelete={memoizedHandleDeleteFruit} />
      ))}
    </div>
  )
}
