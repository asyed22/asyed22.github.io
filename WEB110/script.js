function tick(){
    var monthNames = ["January","Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    document.getElementById('date').innerHTML = (dayNames[d.getDay()] + ' ' + d.getDate() + ' ' + monthNames[d.getMonth()] + ' ' +d.getFullYear());

    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var day = h<11 ? 'AM' : 'PM';
    h = h<10? '0' +h: h;
    m = m<10? '0' +m: m;
    s = s<10? '0' +s: s;
    if (h > 12){
        document.getElementById('session').innerHTML = 'PM';
        h = h - 12;
    }else{
        document.getElementById('session').innerHTML = 'AM';
    }
    document.getElementById('hours').innerHTML = h;
    document.getElementById('minutes').innerHTML = m;
    document.getElementById('seconds').innerHTML = s;
} var inter = setInterval (tick , 400);