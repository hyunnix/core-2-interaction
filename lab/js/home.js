// JavaScript函数：将两个数字相加
function add(a, b) {
    return a + b;
}

// JavaScript函数：将圆圈的颜色更改为绿色
function makeItGreen() {
    var circle = document.getElementById('circle');
    circle.style.backgroundColor = 'green';
}

// JavaScript对象：虚构人物
var fictionalCharacter = {
    name: "Harry Potter",
    age: 17,
    house: "Gryffindor",
    wand: {
        wood: "Holly",
        core: "Phoenix feather",
        length: 11.5
    },
    friends: ["Hermione Granger", "Ron Weasley", "Neville Longbottom"],
    enemies: ["Voldemort", "Draco Malfoy"]
};

// 输出虚构人物对象到控制台
console.log(fictionalCharacter);