import { useEffect, useState } from "react";
export default function Item({ img, price }: any) {
  const [imgDimensions, setImgDimensions] = useState({ width: 1, height: 1 });

  useEffect(() => {
    const image = new Image();
    image.src = img;
    image.onload = () => {
      setImgDimensions({ width: image.width, height: image.height });
    };
  }, [img]);

  const gridRowEndValue = Math.round(
    (imgDimensions.height / imgDimensions.width) * 100
  );

  return (
    <div className="item" style={{ gridRowEnd: `span ${gridRowEndValue}` }}>
      <img src={img} alt={price} className="itemImg" />
      <p>£{price}</p>
    </div>
  );
}
