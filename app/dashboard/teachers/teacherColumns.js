import TeacherActions from "./teacherActions";

const columns = [
  { name: "Teacher Code", uid: "teacherCode" },
  { name: "Name", uid: "fullName"},
  { name: "Postion", uid: "position"},
  { name: "Category", uid: "category"},
  { name: "Gender", uid: "gender"},
  { name: "First Appointment", uid: "firstAppointment"},
  { name: "Phone", uid: "phone"},
  { name: "Notes", uid: "notes" },
  { name: "Actions", uid: "actions" },
];

export const teacherRender = ({ row, columnKey }) => {
  const cellValue = row[columnKey];
  switch (columnKey) {
    case "actions":
      return <TeacherActions row={row} />;
    default:
      return cellValue;
  }
};

export { columns };
