function getClickBtn(e){if(void 0!=e){const c=24;var t=document.getElementById("result").value.split("\n"),n=t[0],l=n.length,r=["1","2","3","4","5","6","7","8","9","0"];switch(!0){case"backspace"==e:n="="!=t[1]?n.slice(0,-1):n+"\r\n=\r\n"+t[2];break;case"C"==e:n="";break;case e in r:l<c&&("="!=t[1]?n+=e:n=e);break;case"."==e:l<c&&(n.slice(-1)in r&&"="!=t[1]?n+=e:""!=n&&"="!=t[1]||(n="0.")),(l=c&&"="==t[1])&&(n=n+"\r\n=\r\n"+t[2]);break;case"+"==e:case"-"==e:case"*"==e:case"/"==e:""!=n&&l<c&&("="==t[1]?n=t[2]+e:n.slice(-1)in r&&(n+=e)),(l=c&&"="==t[1])&&(n=n+"\r\n=\r\n"+t[2]);break;case"="==e:""!=n&&(n=n.slice(-1)in r?n+"\r\n=\r\n"+calc(n):n.slice(0,-1)+"\r\n=\r\n"+calc(n.slice(0,-1)))}document.getElementById("result").value=n}}function calc(str){var result=eval(str);return result===1/0&&(result="Делить на ноль нельзя!"),isNaN(result)&&(result="Результат не определен"),result}function clickBtn(){for(var e=document.querySelectorAll("input.calc-btn"),c=0;c<e.length;c++)e[c].setAttribute("onclick","getClickBtn(this.value)")}