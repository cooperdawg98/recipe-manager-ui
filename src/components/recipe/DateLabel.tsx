type DateLabelProps = {
  date: Date;
  label: string;
};

const DateLabel = ({ date, label }: DateLabelProps) => {
  return (
    <div className="flex flex-col items-center min-w-27.5">
      <span className="font-medium">{label}</span>
      <span className="text-verdigris-700 hover:text-verdigris-800">
        {date.toLocaleString("default", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>
      {/* <span className="text-verdigris-700 hover:text-verdigris-800">
        {date.toLocaleString("default", {
          month: "long",
        })}{" "}
        {date.getDate()}, {date.getFullYear()}
      </span> */}
    </div>
  );
};

export default DateLabel;
