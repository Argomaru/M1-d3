//Array

// let book1 = "majalah"
// let book2 = "novel"
// let book3 = "koran"

// const books = [book1, book2, book3]
//index di dalam books ada index 0,1,2
// console.log(books)

//syntax (ARRAY BIASANYA MENGGUNAKAN syntax const)

/*
var things = ["book", "pen", "clock"]
things[0] //book
things[1] //pen
things[2] //clock

things[3] = "laptop" //cara nambah
things[1] = "paper" //cara replace
things[5] = "tali" //kalo nambah di index 5 dan index 4nya kosong maka hasilnya 
//muncul semua sape index 5, tapi index 4 isinya "undefined"
//console.log(things)

console.log(things[4]) //kalo manggil si nomer yang undefined maka hasilnya juga "undefined"

// karena variable things menggunakan "var" maka jika ditulis var things = [isi baru]
// maka hasilnya akan berubah semua
// kalau menggunakan const maka tidak akan bisa diganti

*/

//let bisa di reassign tapi ga bisa di redeclare
/*
let a = "wew"
 a = "kuda"

console.log(a)
*/

//push & pop (methods)
//push nambah suatu index baru ke dalam array di urutan paling terakir
/*
var benda = ["book", "pen", "clock"]
benda.push("jacket") //hasilnya jadi [ 'book', 'pen', 'clock', 'jacket' ]
benda.push("apple", "banana") //[ 'book', 'pen', 'clock', 'jacket', 'apple', 'banana' ]
benda.pop //ilangin paling belakang
console.log(benda)
*/

//unshift & shift

/*
var isi = ["book", "pen","kadal"]
//isi.shift() //apus paling depan
isi.unshift() //munculin paling depan 
console.log(isi)
*/

//splice

/*
var lemari = ["baju", "celana", "jaket", "blazer"]

lemari.splice("rok","t-shirts","kolor") 
//[ 'kolor', 'baju', 'celana', 'jaket', 'blazer' ]
lemari.splice(0,2)
//[ 'celana', 'jaket', 'blazer' ]
lemari.splice(1,0, "tas", "koper")
//[ 'celana', 'tas', 'koper', 'jaket', 'blazer' ]
lemari.splice(1,2,"buku")
console.log(lemari)
*/

//Delete
/*
var barang = ["book","pen","clock","paper"]
//delete salah satu index sehingga membikin jadi unidentified
delete barang[1]
delete barang[3]
//[ 'book', <1 empty item>, 'clock', <1 empty item> ]
console.log(barang)
*/

//Slice
/*
let book1 = "majalah" //lenght 0, line 1  
let book2 = "novel"   //lenght 1, line 2
let book3 = "koran"   //lenght 2, line 3
let book4 = "komik"   //lenght 3, line 4

const books = [book1, book2, book3, book4]

console.log(books.slice(3,4))

*/

//includes (ngecheck isi index ke berapa, tampilan hasilnya boolean)
//var things = ["pen", "book", "pencil"]

//index of (nunjukin index itu urutannya ke berapa)
//syntax
//array.indexOf(item, start) //item buat nentuin data apa yang dicari,start buat nentuin dia mulai dari urutan ke berapa
/*
const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let index = fruits.indexOf("Apple", 3); 

*/
//sort (diurutin dari alphabet paling awal,huruf besar duluan dari huruf kecil, atau angka paling kecil)

//Reverse (membalikan dari arrays awal)
/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse()
//[ 'Mango', 'Apple', 'Orange', 'Banana' ]
console.log(fruits)
*/

/*
var a = [2,1,4]
a.sort()
console.log(a)
*/

//join (ganti separator di dalam arrays, kek komanya gitu2)
/*
var days = ["a","b","c"];
let text = days.join(" / ");
console.log(text)
//hasilnya a / b / c
*/

//Concatenating Array/concat (nambah 1 array sama array lain)
/*
let a = ['a','b','c']
const b = ['c','d','e']
a = a.concat(b)
console.log(a)
console.log(b)
// hasilnya [ 'a', 'b', 'c', 'c', 'd', 'e' ]
            [ 'c', 'd', 'e' ]
*/

//dimensions didalam array ada array lagi

//Loop with array
//Terdapat 5 kategori film: Horror, sci-fi,Thriller, Adventure, Animation
/*
const film = ["Horror", "Sci-fi", "Thriller", "Adventure", "Animation"]
film.reverse()
let info = `Terdapat ${film.length} kategori film `
for(let i=0;i<film.length; i++) //film.lenth digunakan untuk lebih flexible kalau nambah array 

{
    info += '\n' + film[i] 
}
console.log(info)
*/

//cara splice
/*
var names = ["Alex", "Elena", "Chaplin", "Bernard", "Dany"]
names.splice(0,5, "Elena", "Dany", "Chaplin", "Bernard", "Alex")
console.log(names)
*/
//sort Descending(arraynya d sort dulu, baru di reverse
/*)
var names = ["Alex", "Elena", "Chaplin", "Bernard", "Dany"]
console.log(names.sort().reverse())
*/

//loop array
/*
const dimensi = [
    ["aha","ehe"],
    ["buah","awam","kaki"]
] 
console.log(dimensi.length) //2
console.log(dimensi[1].length) //3

console.log(`array index pertama adalah `+ dimensi[1] + ``)
console.log(`array index kedua dengan mengakses index 1 adalah `+ dimensi[1][1] + ``)
for(let i = 0;i< dimensi.length;i++)//loop dimensi array ke 1

{ 
    for(let k=0;k < dimensi[i].length;k++) //loop dimensi array ke 2
    {
        console.log( dimensi[i][k])
    }
}
*/
