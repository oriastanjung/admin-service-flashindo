import React from "react";
import Card from "../../../components/Card";
import ItemsSVG from "../../../assets/icons/ItemsSVG";
import UsersSVG from "../../../assets/icons/UsersSVG";
import TransactionsSVG from "../../../assets/icons/TransactionsSVG";
import CardTable from "../../../components/CardTable";
import TableTransactionDashboard from "../../../components/TableTransactionsDashboard";
import useMainHooks from "./useMainHooks";
import { formatCurrencyRupiah } from "../../../utils/formatNumber";
function Main() {
  const { totalTasks, totalBenefit, totalUsers } = useMainHooks();
  return (
    <>
      <div className="mt-10 flex gap-6 flex-wrap justify-around">
        <Card
          href={"/tasks"}
          title={"Service"}
          value={totalTasks}
          icon={<ItemsSVG isActive />}
        />
        <Card
          href={"/users"}
          title={"Servicer"}
          value={totalUsers}
          icon={<UsersSVG isActive />}
        />
       
      </div>
      
    </>
  );
}

export default Main;
