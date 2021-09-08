const array1 = ["yellow", "blue", "red", "orange"]
let i = 0;
while (i > array1.length) {
    console.log(array1[i]);
    i++;
}

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}

array1.forEach (Element => console.log(Element));
