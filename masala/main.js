// 1-masala
// O1 dan 12gacha son kiritilganda oyning nomi ni chiqarsin
// P/s : 1 kiritlsa consolda « Yanvar oyi » chiqarsin
let month = 1;
switch (month) {
  case 1:
    console.log("Yanvar oyi");
    break;
  case 2:
    console.log("Fevral oyi");
    break;
  case 3:
    console.log("Mart oyi");
    break;
  case 4:
    console.log("Aprel oyi");
    break;
  case 5:
    console.log("May oyi");
    break;
  case 6:
    console.log("Iyun oyi");
    break;
  case 7:
    console.log("Iyul oyi");
    break;
  case 8:
    console.log("Avgust oyi");
    break;
  case 9:
    console.log("Sentabr oyi");
    break;
  case 10:
    console.log("Oktyabr oyi");
    break;
  case 11:
    console.log("Noyabr oyi");
    break;
  case 12:
    console.log("Dekabr oyi");
    break;
}
// 2-masala
// n soni 120dan katta yoki 120ga teng bolsa « Grandga kirdingiz » deb chiqarsin
// n soni 80dan katta yoki 120dan kichik bolsa « kontrakt asosida o'qishga kirdingiz » deb chiqarsin
// n soni 80dan kichik bo'lsa « Talabalikka tavsiya etilmadingiz » deb chqarsin

let studentScore = 120;
if (studentScore >= 120) {
  console.log("Grandga kirdingiz");
} else if (studentScore < 120 && studentScore >= 80) {
  console.log("kontrakt asosida o'qishga kirdingiz");
} else {
  console.log("Talabalikka tavsiya etilmadingiz");
}
// 3-masala  FizzBazz
// n soni  3 ga bo'linsa « Bu son 3ga bo'linadi » deb chiqarsin. Agar n soni 5 ga bo'linsa « Bu son 5ga bo'linadi» Agarda 3 ga ham 5 ga ham bo'linsa « Ushbu son 3ga ham 5 ga ham bo'linadi » deb chiqarsin!
let s = 3;
if (s % 5 == 0 && s % 3 == 0) {
  console.log("Ushbu son 3ga ham 5 ga ham bo'linadi");
} else if (s % 5 == 0) {
  console.log(" Bu son 5ga bo'linadi");
} else if (s % 3 == 0) {
  console.log(" Bu son 3ga bo'linadi");
}
// 4-masala
// 1dan 100gacha bolgan juft sonlarni chiqaring
let a = 100;
for (i = 1; i <= a; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// 5-masala
// 1dan 100gacha bolgan toq sonlarni chiqaring
const arr = [];
for (var p = 2; p <= 100; p++) {
  for (var i = 2; i < p; i++) {
    if (p % i == 0) {
      break;
    }
  }
  if (p == i) {
    arr.push(p);
  }
}
console.log(arr);
const ar = [];
for (var p = 1; p <= 100; p++) {
  for (var i = 1; i < p; i++) {
    if (p % i == 0) {
      break;
    }
  }
  if (p == i) {
    ar.push(p);
  }
}
console.log(ar);
