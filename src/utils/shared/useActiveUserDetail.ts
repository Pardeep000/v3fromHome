interface UserDetail {
  id: string;
  name: string;
  mainSuperAdminId: string;
  managerId: null | string;
  paneltype: string;
}

export default function useActiveUserDetail() {
  const activeUserDetail = localStorage.getItem("ActiveUserdetail");
  const data: UserDetail = activeUserDetail
    ? JSON.parse(activeUserDetail)
    : null;

  return {
    agentId: data.id,
    name: data.name,
    mainSuperAdminId: data.mainSuperAdminId,
    managerId: data.managerId,
    panelType: data.paneltype,
  };
}
