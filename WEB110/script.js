function setTime () {
    var time = new date();                
    var HRS = time.getHours();
    var MIN = time.getMinutes();
    var SEC = time.getSeconds();
    var session  = document.getElementById('session');
            
    if (hours > 12){
        session.innerHTML = 'PM';
        HRS = HRS - 12;
    }else{
        session.innerHTML = 'AM';
    }
    HRS = document.getElementById('hours').innerHTML;
    MIN = document.getElementById('minutes').innerHTML;
    SEC = document.getElementById('seconds').innerHTML;                    
}
setInterval(setTime , 1000);