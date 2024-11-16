function slugify(title) {
   const titleLower = title.toLowerCase();
    const slugiArr = titleLower.split(" ");
    const slug = slugiArr.join("-");
return slug;
} 

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));