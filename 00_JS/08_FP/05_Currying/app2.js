// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// UN-CURRYIED VERSION
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

const version1 = (passGrade, failGrade, average, testScore) => {
  return testScore >= average ? passGrade : failGrade;
};

version1('+', '-', 0.6, 0.1);
version1('+', '-', 0.6, 0.2);
version1('+', '-', 0.6, 0.3);
version1('+', '-', 0.6, 0.4);
version1('+', '-', 0.6, 0.5);
version1('+', '-', 0.6, 0.6);
version1('+', '-', 0.6, 0.7);
version1('+', '-', 0.6, 0.8);
version1('+', '-', 0.6, 0.9);
version1('+', '-', 0.6, 1);

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// CURRYIED VERSION
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

const version2 = passGrade => failGrade => average => testScore => {
  return testScore >= average ? passGrade : failGrade;
};

const version3 = version2('+')('-')(0.6);

version3(0.1);
version3(0.2);
version3(0.3);
version3(0.4);
version3(0.5);
version3(0.6);
version3(0.7);
version3(0.8);
version3(0.9);
version3(1);