const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    const seedLi = document.querySelectorAll(".seed");
    console.log(seedLi);

    // 2. Get all seedless fruit elements
    // Your code here
    const seedlessLi = document.querySelectorAll(".seedless");
    console.log(seedlessLi);

    // 3. Get first seedless fruit element
    // Your code here
    const seed1 = document.querySelector(".seedless");
    console.log(seed1);

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    // const test1 = document.getElementById("wrapper");
    // const test2 = test1.querySelector("span")
    // console.log(test2);
    console.log(document.querySelector("span"))

    // 5. Get all children of element "wrapper"
    // Your code here
    const test1 = document.getElementById("wrapper").children;
    console.log(test1)

    // 6. Get all odd number list items in the list
    // Your code here
    const oddNum = document.querySelectorAll("li.odd");
    console.log(oddNum);

    // 7. Get all even number list items in the list
    // Your code here
    const poop = document.querySelectorAll('ol > li:not(.odd)')
    console.log(poop)

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    const companies = three.querySelectorAll('a:not([class])')
    console.log(companies);

    // 9. Get "Amazon" list element
    // Your code here
    const amazon = document.querySelector('a[href="https://www.amazon.com"]');
    console.log(amazon);

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    const uniCorn = document.querySelectorAll("ul.unicorn");
    console.log(uniCorn);
}

window.onload = select;