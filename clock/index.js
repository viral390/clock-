setInterval(() =>{
    date = new date();
    htime = d.gethours();
    mtime = d.getminutes();
    stime = d.getseconds();
    hrotation=30*htime + mtime/2;
    mrotation=6*mtime
    srotation= 6*stime

    hours.style.transform=`rorate(${hrotation}deg)`;
    minutes.style.transform=`rorate(${mrotation}deg)`;
    seconds.style.transform=`rorate(${srotation}deg)`;

}, 1000);