import { useSnackbar } from "notistack";

interface IsetShowBar {
  msg: string;
  variant: string;
  show: boolean;
}

interface IStateVariables {
  showBar: IsetShowBar;
  setShowBar: (a: IsetShowBar) => void;
}

interface ISnackBar extends IStateVariables {
  msg: string;
  variant: any;
}

const SnackBar = ({ msg, variant, showBar, setShowBar }: ISnackBar) => {
  const { enqueueSnackbar } = useSnackbar();
  //
  if (showBar.show) {
    enqueueSnackbar(msg, {
      autoHideDuration: 3000,
      anchorOrigin: { vertical: "top", horizontal: "center" },
      variant,
    });
    setTimeout(() => {
      setShowBar({
        ...showBar,
        show: false,
      });
    }, 3000);
  }
};

const useSnack = (snackBarData: IStateVariables) => {
  const { showBar, setShowBar } = snackBarData;
  const { msg, variant } = showBar;
  SnackBar({
    msg,
    variant,
    showBar,
    setShowBar,
  });
};

export default useSnack;

// way to use it
// const [showBar, setShowBar] = useState({
//   msg: "",
//   variant: "",
//   show: false,
// });
// const showData = () => {
//   setShowBar({
//     ...showBar,
//     msg: "checking snackbar",
//     variant: "success",
//     show: true,
//   });
// };
// useSnack({ showBar, setShowBar });
