import DocumentActions from "./DocumentActions";

const columns = [
  { name: "No.", uid: "no" },
  { name: "County", uid: "county", sortable: true },
  { name: "Payam", uid: "payam", sortable: true },
  { name: "Education", uid: "education", sortable: true },
  { name: "School", uid: "school", sortable: true },
  { name: "Actions", uid: "actions" },
];

export const documentRender = ({ row, columnKey }) => {
  const cellValue = row[columnKey];
  switch (columnKey) {
    case "county":
      return (
        <div className="flex flex-col">
          <p className="text-bold text-small capitalize">{cellValue}</p>
          <p className="text-bold text-tiny capitalize text-default-400">
            {row.team}
          </p>
        </div>
      );
    case "actions":
      return <DocumentActions />;
    default:
      return cellValue;
  }
};

const documents = [
  {
    id: 1,
    no: 1,
    state: "Jonglei",
    county: "Bor",
    payam: "Anyidi",
    education: "Primary",
    school: "Bor Primary School",
    code: "SS-JG-BR",
    eligible: 10,
    paid: 8,
  },
  {
    id: 2,
    no: 2,
    state: "Central Equatoria",
    county: "Juba",
    payam: "Gudele",
    education: "Secondary",
    school: "Juba Secondary School",
    code: "SS-CE-JB",
    eligible: 14,
    paid: 12,
  },
  {
    id: 3,
    no: 3,
    state: "Upper Nile",
    county: "Malakal",
    payam: "Doleib Hill",
    education: "Primary",
    school: "Malakal Primary School",
    code: "SS-UN-ML",
    eligible: 15,
    paid: 13,
  },
  {
    id: 4,
    no: 4,
    state: "Warrap",
    county: "Kuajok",
    payam: "Ajogo",
    education: "Secondary",
    school: "Kuajok Secondary School",
    code: "SS-WR-KJ",
    eligible: 12,
    paid: 9,
  },
  {
    id: 5,
    no: 5,
    state: "Lakes",
    county: "Rumbek",
    payam: "Malueth",
    education: "Primary",
    school: "Rumbek Primary School",
    code: "SS-LK-RB",
    eligible: 14,
    paid: 11,
  },
  {
    id: 6,
    no: 6,
    state: "Western Equatoria",
    county: "Yambio",
    payam: "Nzara",
    education: "Secondary",
    school: "Yambio Secondary School",
    code: "SS-WE-YM",
    eligible: 11,
    paid: 10,
  },
  {
    id: 7,
    no: 7,
    state: "Eastern Equatoria",
    county: "Torit",
    payam: "Imehejek",
    education: "Primary",
    school: "Torit Primary School",
    code: "SS-EE-TR",
    eligible: 13,
    paid: 10,
  },
  {
    id: 8,
    no: 8,
    state: "Western Bahr el Ghazal",
    county: "Wau",
    payam: "Bagari",
    education: "Secondary",
    school: "Wau Secondary School",
    code: "SS-WB-WU",
    eligible: 15,
    paid: 14,
  },
  {
    id: 9,
    no: 9,
    state: "Northern Bahr el Ghazal",
    county: "Aweil",
    payam: "Marial Bai",
    education: "Primary",
    school: "Aweil Primary School",
    code: "SS-NB-AW",
    eligible: 13,
    paid: 11,
  },
  {
    id: 10,
    no: 10,
    state: "Unity",
    county: "Bentiu",
    payam: "Rubkona",
    education: "Secondary",
    school: "Bentiu Secondary School",
    code: "SS-UT-BN",
    eligible: 14,
    paid: 12,
  },
];

export { columns, documents };
