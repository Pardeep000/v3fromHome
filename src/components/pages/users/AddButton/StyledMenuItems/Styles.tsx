import { makeStyles } from "tss-react/mui";
import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";

const useStyles = makeStyles()(() => ({
  addButton: {
    width: "78px",
    height: "30px",
    borderRadius: "3px",
    backgroundColor: "#7F3F98",
    color: "#FFFFFF",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "16px",
    fontFamily: "poppins",
    //
    textTransform: "capitalize",
  },
  buttonMenuItem: {
    // width: '146px',
    width: "100%",
    // height: '28px',
    borderRadius: "3px",
    height: "38.5px",
  },

  menuIcon: {
    color: "#7F3F98",
    fontSize: "20px",
  },

  MenuItemStyling: {
    // width: '78px',
    width: "100%",
    height: "18px",
    fontFamily: "poppins",
    fontWeight: "400",
    // fontSize: '12px',
    lineHeight: "18px",
    fontSize: "15px",
  },
}));

export default useStyles;

export const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));
