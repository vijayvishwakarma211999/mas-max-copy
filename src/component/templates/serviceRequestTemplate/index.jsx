import MUIDataTable from "mui-datatables";

import { ServiceRequestTableColumns } from "./serviceRequestTableColumns";
import ServiceRequestTableOption from "./serviceRequestTableOption";
import { useState } from "react";
import { data } from "../../pages/service_request/data";
const ServiceRequestTemplate = () => {
  const [serviceReqData, setServiceReqData] = useState(data);
  const column = ServiceRequestTableColumns();
  const option = ServiceRequestTableOption();
  return (
    <>
      <MUIDataTable
        title="
        Service Requests"
        options={option}
        columns={column}
        data={serviceReqData}
      />
    </>
  );
};

export default ServiceRequestTemplate;
