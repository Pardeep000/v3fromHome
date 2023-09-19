const chipSX = {
  height: "18px",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "18px",
  boxShadow: "none",
  //
  "& .MuiChip-label": {
    padding: "0px 2px",
  },
};

const chipBlue = {
  ...chipSX,
  color: "#0085FF",
  backgroundColor: "rgba(0, 133, 255,0.05)",
  borderRadius: "2px",
  height: "24px",
};

const chipOrange = {
  ...chipSX,
  color: "#FF8A00",
  backgroundColor: "rgba(255, 138, 0,0.05)",
  borderRadius: "2px",
  height: "24px",
};

const chipRed = {
  ...chipSX,
  color: "#E34D59",
  backgroundColor: "rgba(227, 77, 89,0.05)",
  borderRadius: "2px",
  height: "24px",
};

export { chipSX, chipBlue, chipOrange, chipRed };
