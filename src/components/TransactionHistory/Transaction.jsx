import s from "./TransactionHistory.module.css";

const Transaction = ({ type, amount, currency }) => {
  return (
    <tr className={s.item}>
      <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default Transaction;
