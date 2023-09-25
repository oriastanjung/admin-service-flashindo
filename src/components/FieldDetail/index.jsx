import { formatCurrencyRupiah } from "../../utils/formatNumber";

function FieldDetail(props) {
  return (
    <div className={`flex flex-col items-start justify-start w-full`}>
      <div className="flex flex-col items-start justify-start w-full">
        <label className="text-lg font-semibold">{props.label}</label>
        <p className={`px-3 py-2 border-2 w-full `} value={props.value}>
          {props.type === "currency" ? (
            formatCurrencyRupiah(props.value)
          ) : props.type === "statusPayment" ? (
            <span
              className={`font-bold uppercase ${
                props.value === "success"
                  ? "text-success"
                  : props.value === "denied"
                  ? "text-danger"
                  : "text-slate-400"
              }`}
            >
              {" "}
              {props.value}
            </span>
          ) : (
            props.value
          )}
        </p>
      </div>
    </div>
  );
}

export default FieldDetail;
