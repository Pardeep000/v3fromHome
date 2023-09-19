import useStyles from "./Styles";

interface employedRender {
  cellData: string;
}

const Employed: React.FC<employedRender> = ({ cellData }) => {
  const { classes } = useStyles();
  return <span className={classes.employedStyle}>{cellData}</span>;
};

const employedRender: React.FC<employedRender> = ({ cellData }) => (
  <Employed cellData={cellData} />
);

export default employedRender;
