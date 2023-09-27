// type YourFormValues = {
//   name: string;
//   pseudonym: string;
//   email: string;
//   number: string;
//   designation: string;
// };
import { Dispatch, SetStateAction } from "react";

export interface Props {
  setEditProfile: (a: boolean) => void;
  profile: {
    name: string;
    email: string;
    picture: string;
    pseudonym: string;
    designation: string;
    number: string;
  };
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
}
