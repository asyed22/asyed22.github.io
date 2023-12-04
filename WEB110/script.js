function setTime () {
    const time = new date();                
    var HRS = document.getElementById('hours')();
    var MIN = document.getElementById('minutes')();
    var SEC = document.getElementById('seconds')();
    var session  = document.getElementById('session');
            
    if (HRS >= 12){
        session.innerHTML = 'PM';
        HRS = HRS - 12;
    }else{
        session.innerHTML = 'AM';
    }
    HRS.innerHTML = time.getHours();
    MIN.innerHTML = time.getMinutes();
    SEC.innerHTML = time.getSeconds();                    
}
setInterval(setTime , 1000);