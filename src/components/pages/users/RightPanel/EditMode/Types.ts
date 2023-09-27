export interface BackendErrorProps {
  oldPassword: string;
  newPassword: string;
  confirmedPassword: string;
}

export interface EditDetailProp {
  pagesIdArray: string;
  agentlimitchatassign: number;
  designation: {
    id: string;
    name: string;
    paneltype: string;
    __typename: string;
  };
  email: string;
  id: string;
  jobTitle: string;
  managerId: {
    id: string;
    __typename: string;
  };
  name: string;
  number: string;
  // pages: string[];
  picture: null | any;
  pseudonym: string;
  status: string;
  username: string;
  __typename: string;
}

export interface UserdataProp {
  confirmPassword: string;
  email: string;
  firstName?: string;
  jobTitle?: string;
  lastName: string;
  mobile?: string;
  newPassword: string;
  oldPassword: string;
  pages: string[];
  picture: string | null;
  pseudonym?: string;
  status?: string;
  comments: number;
}

export interface PagePropdata {
  accessToken: string;
  id: string;
  name: string;
  pageId: any;
  __typename: string;
}

export interface Props {
  handleSelectedDataForDeleteObject: any;
  passGroupedObject: any;
  selectedUserData: EditDetailProp;
  // handleOnProfileUpdate: (mode: string, data?: any) => void;
  handleOnProfileUpdate: any;
  // onClose: () => void;
  handleDelete: (data: any) => void;
  setRightPanelOpened: any;
  setIsEditMode: any;
}

export interface FormValuesProps {
  chatlimit?: string;
  email?: string;
  name?: string;
  phone?: string;
  pname?: string;
  rolelink?: string;
  title?: string;
}
export interface PasswordProps {
  oldpass?: string;
  newpass?: string;
  conpass?: string;
}
export interface PasswordData {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface PasswordError {
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
  notmatch?: string;
}
