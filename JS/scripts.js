// Задание 1.Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
let arr1 = [1, 2, 3, 4, 5];
for(q = 0; q < arr1.length; q++) {
    console.log(arr1[q]);
    }

// Задание 2.

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for(w = 0; w < arr2.length; w++) {
    if (arr2[w] > -10 && arr2[w] < -3) {
        console.log(arr2[w]);
    }
}

// Задание 3. 

// Задание 4. 

let arr4 = ['10', '20', '30', '50', '235', '3000'];
for (let p = 0; p < arr4.length; p++) {
    if (arr4[p][0] == '1' || arr4[p][0] == '2' || arr4[p][0] == '5') {
        console.log(arr4[p]);
        }
}

// Задание 5.
 let arr5 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
 for (var a = 0; a < arr5.length; a++) {
     if (a == 5 || a == 6) {
        document.write('<b>' + arr5[a] + '</b><br>');
} else {
    document.write(arr5[a] + '<br>');
}
}

// Задание 6.Создайте массив с произвольными данными. Добавьте в конец массива любой элемент
let arr6 = [1, 2, 3, 4, 5];
arr6[5] = 666;
arr6[arr6.length - 1];
console.log(arr6);

// Задание 7. 



// Задание 8.

const arr8 = [12, false, 'Текст', 4, 2, -5, 0];
const reversed = arr8.reverse();
console.log('Перевернутый массив:', reversed);

// Задание 9.