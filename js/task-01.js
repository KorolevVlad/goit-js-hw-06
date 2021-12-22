const CategoriesEl = document.querySelectorAll('.item');

const CategoriesAllEl = `Number of categories: ${CategoriesEl.length}`;
console.log(CategoriesAllEl);

const category = array => {
  array.forEach(element => {
    const titleEl = element.querySelector('h2');
    const litsItemEl = element.querySelectorAll('li');
    const categoryNameEl = `Category: ${titleEl.textContent}`;
    const categoryNumberEl = `Elements: ${litsItemEl.length}`;
    console.log(categoryNameEl);
    console.log(categoryNumberEl);
  });
};
category(CategoriesEl);
