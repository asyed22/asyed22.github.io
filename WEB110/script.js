function setTime () {
    var time = new date();                
    var HRS = time.getHours();
    var MIN = time.getMinutes();
    var SEC = time.getSeconds();
    var session  = document.getElementById('session');
    HRS = document.getElementById('HRS').innerHTML;
    MIN = document.getElementById('MIN').innerHTML;
    SEC = document.getElementById('SEC').innerHTML;
            
    if (hours > 12){
        session.innerHTML = 'PM';
        HRS = HRS - 12;
    }
    else{
        session.innerHTML = 'AM';
    }                    
}
setInterval(setTime , 1000);