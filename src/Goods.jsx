function Goods(props){
    return (
      <div>
        <h3>{props.title}</h3>
        <p>{props.cost}</p>
        <img src={props.image} alt={props.title} />
      </div>
    );
}
export default Goods;