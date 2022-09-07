function greet(fname: String = "World!", lname?: String): String {
    if (lname === undefined) {
        return "Hello " + fname;
    }
    return "Hello " + fname + " " + lname;
}


console.log(greet());
console.log(greet("Debojyoti"));
console.log(greet("Debojyoti", "Mukherjee"));

var arr: Number[] = [1, 2, 3];
arr.push(4);
var last: Number = arr.pop();
console.log(last.toString(10));
console.log(arr.toString());

var tuple: [string, number] = ["Debojyoti", 5];
console.log(tuple[0]);

var a: number | string;
a = 12.5;
a = "String";
console.log(a);
