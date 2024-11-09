WEEKS = 7;

months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
daysOfWeek = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

function solution(a, b) {
  const numberOfDate = calculateNumberOfDate(a, b);
  const answer = daysOfWeek[numberOfDate % WEEKS];

  return answer;
}

function calculateNumberOfDate(month, day) {
  return months.slice(0, month - 1).reduce((acc, curr) => acc + curr, day);
}
