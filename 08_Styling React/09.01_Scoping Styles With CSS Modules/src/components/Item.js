import Itemk from "./item.module.css";

export default function Item({ item }) {
  return (
    <div className={Itemk.container}>
      <h3 className={Itemk.title}>{item.title}</h3>
      <img src={item.image} alt={item.title} className={Itemk.image} />
      <p>
        <strong className={Itemk.price}>${item.price}</strong>
      </p>
      <p>{Itemk.description}</p>
    </div>
  );
}
