import { CustomerData } from "../../../../pages/reports/Types";

export interface Props {
  tabularData: CustomerData[];
  //   tablularDataApiHandle: (newPage: React.SetStateAction<number>) => void;
  tablularDataApiHandle?: (a: any) => void;
  tablularDataApiHandleAccessories?: any;
  paginationCount: number;
  getCustomerTabularDatasLoading: boolean;
}
