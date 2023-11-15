'use client'
import RegisterProduct from "./register/page";
import ListStock from "./list/page";

export default function Stock() {
  return (
    <div className="w-[70rem] bg-white px-10 py-10">
      <ListStock></ListStock>
    </div>
  );
}
