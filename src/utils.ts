export const calculateTimeEmployed = () => {
  const startOfEmployment = new Date("2023-01-15");
  const today = new Date();

  let years = today.getFullYear() - startOfEmployment.getFullYear();
  let months = today.getMonth() - startOfEmployment.getMonth();
  let days = today.getDate() - startOfEmployment.getDate();

  // Adjust months and years if needed
  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
};

export const openLinkOnClick = (link: string) => () => window.open(link, "_blank");
