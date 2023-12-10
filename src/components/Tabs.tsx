import { useState, useRef } from "react";
import "@/css/Tabs.css";
import ForYou from "./ForYou";

export default function Tabs() {
  const forYou = useRef<HTMLHeadingElement>(null);
  const following = useRef<HTMLHeadingElement>(null);

  const [selected, setSelected] = useState(forYou);

  return (
    <div className="tabsWrapper">
      <div className="tabsTriggers">
        <div className="tabsHeaders">
          {selected === forYou ? (
            <>
              <h2 ref={forYou} className="selectedTab">
                For You
              </h2>
              <h2
                ref={following}
                onClick={() => {
                  setSelected(following);
                }}
              >
                Following
              </h2>
            </>
          ) : (
            <>
              <h2
                ref={forYou}
                onClick={() => {
                  setSelected(forYou);
                }}
              >
                For You
              </h2>
              <h2 ref={following} className="selectedTab">
                Following
              </h2>
            </>
          )}
        </div>
        <div
          className="selectedIndicator"
          style={
            selected === forYou
              ? {
                  marginLeft: "7%",
                }
              : {
                  marginLeft: "62%",
                }
          }
        ></div>
      </div>
      <div className="tabsContent">
        <ForYou />
      </div>
    </div>
  );
}
