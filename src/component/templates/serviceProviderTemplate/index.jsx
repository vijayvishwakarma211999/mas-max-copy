import MUIDataTable from "mui-datatables";
import { ServiceProviderTableColumns } from "./serviceProviderTableColumns";
import ServiceProviderTableOption from "./serviceProviderTableOption";

const ServiceProviderTemplate = () => {
  const column = ServiceProviderTableColumns();
  const option = ServiceProviderTableOption();

  return (
    <>
      <MUIDataTable
        title="
        Service Providers"
        options={option}
        columns={column}
      />
    </>
  );
};

export default ServiceProviderTemplate;
