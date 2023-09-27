import useStyles from "./Styles";

interface EmployedRenderProps {
  cellData: string;
}

const Employed: React.FC<EmployedRenderProps> = ({ cellData }) => {
  const { classes } = useStyles();
  return <span className={classes.employedStyle}>{cellData}</span>;
};

const EmployedRender: React.FC<EmployedRenderProps> = ({ cellData }) => (
  <Employed cellData={cellData} />
);

export default EmployedRender;
