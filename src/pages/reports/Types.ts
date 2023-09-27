export interface ReportsInitialProp {}

export interface CustomerData {
  customerName: string;
  id: string;
  pageName: string;
  timestamp: string;
  pageId: string;
  customerId: string;
}
export interface getCustomerCountAndCountsPerPageResultItem {
  dateRange: string;
  pageName: string;
  pageId: string;
  pageCount: number;
  chatDate: string;
  agentId: string;
}

export interface ManagersQueryResult {}

export interface UsersByManagersQueryResultItem {
  id: number;
  username: string;
  managerId: number;
  designationId: number;
}

export interface TabularData {
  customerName: string;
  id: string;
  pageName: string;
  timestamp: string;
  pageId: string;
  customerId: string;
  serial: number;
}

export interface TabularData {
  customerdata: CustomerData[];
  hasNextPage: boolean;
}

export type Pagination = {
  page: number;
  hasNextPage: boolean;
  currentPage: number;
  lastCursorValue: string;
  // firstCursorValue: 0
  firstCursorValue: number[];
};

export interface PageNameWithPageId {
  pageName: string;
  pageId: string;
}
