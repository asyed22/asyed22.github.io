function setTime () {
    let time = new date();                
    let HRS = document.getElementById('hours')();
    let MIN = document.getElementById('minutes')();
    let SEC = document.getElementById('seconds')();
    let session  = document.getElementById('session');
            
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