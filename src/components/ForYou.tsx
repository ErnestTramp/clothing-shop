import items from "@/items";
import Item from "./Item";
import "@/css/ForYou.css";
export default function ForYou() {
  return (
    <div className="forYouWrapper">
      {items.map((item) => (
        <Item img={item.img} price={item.price} />
      ))}
    </div>
  );
}
