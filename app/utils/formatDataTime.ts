const formatDataTime = (time: {
  seconds: number;
  nanoseconds: number;
}) => {
  const date = new Date(time?.seconds * 1000);
  return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}.${date.getFullYear()} ${date
    .getHours()
    .toString()
    .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
};

export default formatDataTime;
