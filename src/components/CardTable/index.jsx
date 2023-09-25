function CardTable(props) {
  return (
    <div
      className="bg-white h-[50vh] px-10 py-10 rounded-3xl"
      style={{
        border: "1px solid #D9D9D9",
      }}
    >
      {props.children}
    </div>
  );
}

export default CardTable;
