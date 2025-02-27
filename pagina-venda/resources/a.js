(function(){const elements=document.querySelectorAll('[class*="track-"]');const uid=document.body.getAttribute('id')?.replace("_","");const pid=document.body.getAttribute('data-page')?.replace("_","");console.log(uid);console.log(elements);console.log(window.location);let btnClicks=[];let scrolled=0.00;const totalHeight=document.documentElement.scrollHeight-window.innerHeight;let pageLoadTime=new Date();function send(data){const url='https://apidopro.atomicat-api.com/lytics/save'
data['visitorId']=getVisitorsId()
data['duration']=(new Date()-pageLoadTime)/1000;data['btnClicks']=btnClicks;data['uid']=uid;data['pid']=pid;data['search']=window.location.search;data['pathname']=window.location.pathname;data['scrolled']=scrolled
if(uid&&pid){if(navigator&&navigator.sendBeacon){navigator.sendBeacon(url,JSON.stringify(data));}else{data['origin']=window.location.hostname
fetch(url,{keepalive:true,method:'POST',mode:'no-cors',headers:{'content-type':'application/json',},body:JSON.stringify(data),});}
clearData()}}
function clearData(){btnClicks=[];}
function getVisitorsId(){var id;try{var stored=localStorage.getItem("atomicat.host")
id=JSON.parse(stored).uuid;}catch(e){id=generateVisitorsId()
localStorage.setItem("atomicat.host",JSON.stringify({uuid:id,}))}
return id}
function generateVisitorsId(){var now=new Date().getTime();var random=(now*Math.random()*100000).toString(36)+'-'+now+'-'+(now*Math.random()*100000).toString(36);return random;}
function handleBtnClick(event,link){const element=event.target;const classes=link.classList;let trackId='';console.log(link);console.log(classes);for(let i=0;i<classes.length;i++){if(classes[i].startsWith('track-')){trackId=classes[i].replace("track-","");break;}}
const foundIndex=btnClicks.findIndex(x=>x.id==trackId);console.log(foundIndex);if(foundIndex!==-1){btnClicks[foundIndex].count=btnClicks[foundIndex].count+1}else{btnClicks.push({id:trackId,count:1});}
console.log(btnClicks);}
function calculateScrollPercentage(){const scrollTop=window.pageYOffset||document.documentElement.scrollTop;const scrollPercentage=(scrollTop/totalHeight)*100;scrolled=Math.max(scrolled,scrollPercentage).toFixed(2);}
function load(){elements.forEach(link=>{console.log("---------------link-------------");console.log(link);link.addEventListener('click',event=>handleBtnClick(event,link));});window.addEventListener('scroll',calculateScrollPercentage);}
document.addEventListener('visibilitychange',function logData(){if(document.visibilityState==='hidden'){send({action:'left'})}});load()})();