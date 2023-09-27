const timestampConverter = (UNIX_timestamp: string) => {
  var date = new Date(Number(UNIX_timestamp) * 1000);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Use 24-hour format
    timeZoneName: "short",
  };

  return date.toLocaleString("en-US", options);
};

export default timestampConverter;
