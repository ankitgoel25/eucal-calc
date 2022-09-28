const form = document.querySelector('form');
const acres = document.querySelector('#acres');
const trees = document.querySelector('#trees');
const seedPrice = document.querySelector('#seedPrice');
const discount = document.querySelector('#discount');
const spTree = document.querySelector('#spTree');
const result = document.querySelector('#result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const finalCost = seedPrice.value - discount.value;

  const html = `
        <p>Total number of trees in ${
          acres.value
        } acres of land is <b>${new Intl.NumberFormat('en-IN').format(
    acres.value * trees.value,
  )}</b> trees</p>
        <p>Final Cost of tree seed per tree is <b>₹ ${finalCost}</b></p>
        <p>Total farmer's investment is <b>₹ ${new Intl.NumberFormat(
          'en-IN',
        ).format(finalCost * trees.value * acres.value)}</b></p>
        <p>Farmer's total earning in 3-4 years is <b>₹ ${new Intl.NumberFormat(
          'en-IN',
        ).format(trees.value * acres.value * spTree.value)}</b></p>
        <p>Farmer's <b>annual</b> earning is <b>₹ ${new Intl.NumberFormat(
          'en-IN',
        ).format((trees.value * acres.value * spTree.value) / 3.5)}</b></p>
  `;

  result.innerHTML = html;
});
