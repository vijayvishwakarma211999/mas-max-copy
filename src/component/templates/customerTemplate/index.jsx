import MUIDataTable from "mui-datatables";
import { CustomerTableColumns } from "./customerTableColumns";
import CustomerTableOption from "./customerTableOption";
import { useState } from "react";
import { data } from "../../pages/customers/data";
import CustomerAlertDialog from "./customerModel";
const CustomerTemplate = () => {
  const [customerData, setCustomerData] = useState(data);
  const [openModel, setOpenModel] = useState();
  const column = CustomerTableColumns({ openModel, setOpenModel });
  const option = CustomerTableOption();

  return (
    <>
      <MUIDataTable
        title="Customer"
        options={option}
        columns={column}
        data={customerData}
      />
      <CustomerAlertDialog {...{ openModel, setOpenModel }} />
    </>
  );
};

export default CustomerTemplate;
