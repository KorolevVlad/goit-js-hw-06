const categoriesListEl = document.querySelectorAll('.item').length;
console.log('Number of categories:', categoriesListEl);

//first variant

//first element
const categoriesListTitleFirstEl =
  document.querySelector('#categories').firstElementChild.firstElementChild
    .textContent;
console.log('Category:', categoriesListTitleFirstEl);

const categoriesListTextFirstEl = document
  .querySelector('#categories')
  .firstElementChild.querySelectorAll('li').length;

console.log('Elements:', categoriesListTextFirstEl);

//second element
const categoriesListTitleSecondEl =
  document.querySelector('#categories').children[1].firstElementChild
    .textContent;
console.log('Category:', categoriesListTitleSecondEl);

const categoriesListTitleLengthSecondEl = document
  .querySelector('#categories')
  .children[1].lastElementChild.querySelectorAll('li').length;
console.log('Elements:', categoriesListTitleLengthSecondEl);

//last element
const categoriesListTitleLastEl =
  document.querySelector('#categories').lastElementChild.firstElementChild
    .textContent;
console.log('Category:', categoriesListTitleLastEl);

const categoriesListTextLastEl = document
  .querySelector('#categories')
  .lastElementChild.querySelectorAll('li').length;

console.log('Elements:', categoriesListTextLastEl);

//second variant

// const categoriesListTitleEl = document.querySelector('h2').textContent;
// console.log('Category:', categoriesListTitleEl);

// const categoriesListTextEl = document.querySelector('.item>ul');
// const categoriesListLengthEl =
//   categoriesListTextEl.querySelectorAll('li').length;
// console.log('Elements: ', categoriesListLengthEl);

// const categoriesListTitlleNextEl =
//   document.querySelectorAll('h2')[1].textContent;
// console.log('Category:', categoriesListTitlleNextEl);

// const categoriesListTextNextEl = document.querySelectorAll('.item>ul')[1];
// const categoriesListLengthNextEl =
//   categoriesListTextNextEl.querySelectorAll('li').length;
// console.log('Elements: ', categoriesListLengthNextEl);

// const categoriesListTitlleLastEl =
//   document.querySelectorAll('h2')[2].textContent;
// console.log('Category:', categoriesListTitlleLastEl);

// const categoriesListTextLastEl = document.querySelectorAll('.item>ul')[2];
// const categoriesListLengthLastEl =
//   categoriesListTextLastEl.querySelectorAll('li').length;
// console.log('Elements: ', categoriesListLengthLastEl);
