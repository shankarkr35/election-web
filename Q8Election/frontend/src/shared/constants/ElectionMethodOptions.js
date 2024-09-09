export const ElectionMethodOptions = [
  {
    id: '1',
    name: "مرشحين فقط",
    value: "candidateOnly",
    badgeClass: "badge bg-info",
  },
  {
    id: '2',
    name: "قوائم - قوائم فقط",
    value: "partyOnly",
    badgeClass: "badge bg-danger",
  },
  {
    id: '3',
    name: "قوائم - مرشحين فقط",
    value: "partyCandidateOnly",
    badgeClass: "badge bg-danger",
  },
  {
    id: '4',
    name: "قوائم - قوائم ومرشحين",
    value: "partyCandidateCombined",
    badgeClass: "badge bg-warning",
  },
];





export const electionMethodBadge = ({ electionMethod }) => {
  const entryItem = ElectionMethodOptions.find(option => option.id === electionMethod);
  if (!entryItem) return null;

  return (
    <div className={`badge ${entryItem.badgeClass} fs-12`}>
      {entryItem.name}
    </div>
  );
};