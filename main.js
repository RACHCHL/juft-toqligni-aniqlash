let num = prompt("son kiriting")
if (isNaN(num)) {
    alert("Iltimos raqam kiriting ")
}
else if (num %2==0 && !isNaN(num)) {
    alert(num + " bu juft son")
}
else if (num %2==1 && num !== 0) {
    alert(num + " bu toq son")
}
else("Nimadir hato ketdi")