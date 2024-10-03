export function getDivisibleByFourString3() {
  let result = [];
  for (let i = 1; i <= 20; i++) {
    let divisibleByFour = i % 4 === 0 ? "bisa dibagi 4" : "tidak bisa dibagi 4";
    let oddEven = i % 2 === 0 ? `genap ${divisibleByFour}` : `ganjil`;

    result.push(`${i} adalah bilangan ${oddEven}`);
  }
  return result;
}

console.log(getDivisibleByFourString3());
