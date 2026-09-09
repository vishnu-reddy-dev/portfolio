/**
 * Dynamically calculates total experience duration from a start date string.
 * @param {string} startDateString - e.g. "2025-04-03"
 * @returns {{ full: string, short: string, years: number, months: number }}
 */
export function getExperienceDuration(startDateString = "2025-04-03") {
  const start = new Date(startDateString);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (now.getDate() < start.getDate()) {
    months -= 1;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Handle edge cases
  if (years < 0) {
    years = 0;
    months = 0;
  }

  const yearText = years === 1 ? "1 Year" : `${years} Years`;
  const monthText = months === 1 ? "1 Month" : `${months} Months`;

  let full = "";
  if (years > 0 && months > 0) {
    full = `${yearText} ${monthText}`;
  } else if (years > 0) {
    full = yearText;
  } else {
    full = monthText;
  }

  let short = "";
  if (years > 0 && months > 0) {
    short = `${years}Y ${months}M`;
  } else if (years > 0) {
    short = `${years}Y`;
  } else {
    short = `${months}M`;
  }

  return { full, short, years, months };
}
