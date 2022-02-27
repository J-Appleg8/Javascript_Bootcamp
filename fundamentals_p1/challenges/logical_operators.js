// completes 3 times
// calculate average score - compare teams average scores - might be a draw
// include requirement for min score of 100
// min score also applied to a draw
const dolphinsScore = (97 + 112 + 101) / 3;
const koalasScore = (109 + 95 + 106) / 3;

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
  console.log("Dolphins Won!");
} else if (koalasScore > dolphinsScore && koalasScore >= 100) {
  console.log("Koalas Won!");
} else if (
  dolphinsScore === koalasScore &&
  dolphinsScore >= 100 &&
  koalasScore >= 100
) {
  console.log("Draw!");
} else {
  console.log("No one wins");
}
