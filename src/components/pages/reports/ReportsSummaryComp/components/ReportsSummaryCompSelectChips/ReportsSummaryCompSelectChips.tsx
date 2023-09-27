import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";

interface ChipData {
  id: number;
  label: string;
}
const chipSX = {
  height: 20,
  // width: 56,
  borderRadius: 0,
  fontSize: "9px",
  // whiteSpace: 'nowrap'
  // padding: '0 6px'
};

const chipErrorSX = {
  ...chipSX,
  // width: '100%',
  color: "#777777",
  backgroundColor: "#F3F4F6",
  // marginRight: '5px'
};

interface Props {
  selectedNames: any[];
  handleDeleteChip: (a: any) => void;
}
const ReportsSummaryCompSelectChips: React.FC<Props> = ({
  selectedNames,
  handleDeleteChip,
}) => {
  // const [chips, setChips] = useState<ChipData[]>([
  //     { id: 1, label: 'Chip 1' },
  //     { id: 2, label: 'Chip 2' },
  //     { id: 3, label: 'Chip 3' },
  // ]);

  return (
    <>
      <Stack
        direction="row"
        sx={{
          overflowX: "auto",
          scrollbarWidth: "thin",
          scrollbarColor: "#ccc transparent",

          "&::-webkit-scrollbar": {
            width: "1px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ccc",
            borderRadius: "3px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
        }}
        spacing={{ xs: 1, sm: 2, md: 1 }}
      >
        {selectedNames &&
          selectedNames.map(({ name, id }) => (
            <Chip
              key={name}
              label={name}
              onDelete={() => handleDeleteChip(id)}
              deleteIcon={<CloseIcon sx={{ height: "14px", width: "14px" }} />}
              sx={chipErrorSX}
            />
          ))}
      </Stack>
    </>
  );
};

export default ReportsSummaryCompSelectChips;
