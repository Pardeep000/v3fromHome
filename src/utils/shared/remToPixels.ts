const remToPixels = (remValue: number) => {
  const fontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );
  return Number(remValue * fontSize);
};

export default remToPixels;
