<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js">
</script>
<script>
  //登陆弹窗
    $("#mymy").click(function(){
        $(".block").show()
        $(".loginba").show()
        $(".vx").hide()
    })
    //关闭弹窗
    $(".close").click(function(){
        $(".block").hide()
        $(".loginba").hide()
    })
    //微信登陆
    $(".regsiter2").click(function(){
        $(".web-login").hide()
        $(".page").hide()
        $(".vx").show()
    })
    //QQ登陆
    $(".regsiter").click(function(){
        $(".web-login").show()
        $(".page").show()
        $(".vx").hide()
    })
    //快捷登陆
    $(".gologin").click(function(){
        $(".web-login").hide()
        $(".qlogin").show()
    })
    //密码登陆
    $(".plogin").click(function(){
        $(".web-login").show()
        $(".qlogin").hide()
    })
    //轮播图
    var box=document.getElementById('box');
    var wrap=document.getElementById('wrap');
    var zuo=document.getElementById("zuo")
    var you=document.getElementById("you")
    var num=0;
    var timer;
    function go(){
            timer=setInterval(function(){
                num++;
                
                if(num==3){num=0};
                
                // 移动
                box.style.transform='translateX('+-num*912+'px)';

            },2000)
        }
        go()
        // 鼠标移入移出
        wrap.onmouseenter=function(){
            clearInterval(timer)
        }
        wrap.onmouseleave=function(){
            go()
        }
        //左移
        zuo.onclick=function(){
            num--;
            if(num==-1){num=2};
            box.style.transform='translateX('+-num*912+'px)';
        }
        you.onclick=function(){
            num++;
            if(num==3){num=0};
            box.style.transform='translateX('+-num*912+'px)';
        }
        //选项卡
        var list=document.getElementById("liebiaotou").children
        var liebiao=document.getElementById("liebiaomain").children
        for(var i=0;i<list.length;i++){
            //动态增加属性
            list[i].setAttribute('index',i)
            list[i].onmouseenter=function(e){
                e.preventDefault()
                var c=this.getAttribute('index')
                for(t=0;t<list.length;t++){
                    list[t].removeAttribute('class')
                    liebiao[t].removeAttribute('class')
                }
                liebiao[c].setAttribute('class','current')
                this.setAttribute('class','current')
            }
        }
        //推荐板块 轮播图
        var jump=document.getElementById("jump").children
        var recommendlist=document.getElementById("recommend-list")
        var recommendbox=document.getElementById("recommend-box")
        var recommendnext=document.getElementById("recommend-next")
        var num=0;
        for(var i=0;i<list.length;i++){
            //动态增加属性
            jump[i].setAttribute('index',i)
            jump[i].onclick=function(){
            //获取属性
                num=this.getAttribute('index')
                for(t=0;t<list.length;t++){
                    jump[t].removeAttribute('class')
                }
                recommendbox.style.transform='translateX('+-num*1100+'px)';
                this.setAttribute('class','present')
            }
        }
        recommendnext.onclick=function(){
            num++
            if(num==6){
                num=0
            }
            recommendbox.style.transform='translateX('+-num*550+'px)';
        }

        //选项卡+轮播图
        var besttilie=document.getElementById("best-tilie").children
        var bestlist=document.getElementById("cartoom-tab").children
        var page=document.getElementById("cartoon-main-left-head").children
        var leftpage=document.getElementById("left-page")
        var rigthpage=document.getElementById("rigth-page")
        var nub=0;
        var wholebox=document.getElementById("whole-box")
        var pagenum=document.getElementById("pagenum")

        var girlbox=document.getElementById("girl-box")
        var girlleft=document.getElementById("girl-left")
        var girlrigth=document.getElementById("girl-rigth")
        var girlnum=document.getElementById("girlnum")
        //左右翻页
        leftpage.onclick=function(){
            nub--
            if(nub==-1){
                nub=2
            }
            pagenum.innerHTML=nub+1+'/3'
            wholebox.style.transform='translateX('+-nub*780+'px)';
        }
        rigthpage.onclick=function(){
            nub++
            
            if(nub==3){
                nub=0
            }
            pagenum.innerHTML=nub+1+'/3'
            wholebox.style.transform='translateX('+-nub*780+'px)';
        }

        girlleft.onclick=function(){
            nub--
            if(nub==-1){
                nub=2
            }
            girlnum.innerHTML=nub+1+'/3'
            girlbox.style.transform='translateX('+-nub*780+'px)';
        }
        girlrigth.onclick=function(){
            nub++
            if(nub==3){
                nub=0
            }
            girlnum.innerHTML=nub+1+'/3'
            girlbox.style.transform='translateX('+-nub*780+'px)';
        }

        for(var i=0;i<besttilie.length;i++){
            besttilie[i].setAttribute('index',i)
            besttilie[i].onmouseenter=function(){
                var c=this.getAttribute("index")
               c=parseInt(c)
                for(var j=0;j<bestlist.length;j++){
                    bestlist[j].removeAttribute('class')
                    page[j].removeAttribute("class")
                    besttilie[j].removeAttribute("class")
                }
                page[2].removeAttribute("class")
                bestlist[c].setAttribute("class","new")
                page[c+1].setAttribute("class","new")
                this.setAttribute("class","new")
            }
        }

        //签约板块的选项卡
        var bigimg=document.getElementById("bigimg").children
        var smallimg=document.getElementById("smallimg").children
        var signing=document.getElementById("signing").children
        for(var i=0;i<smallimg.length;i++){
            smallimg[i].setAttribute('index',i)
            smallimg[i].onmouseenter=function(){
                var c=this.getAttribute("index")
                for(var j=0;j<smallimg.length;j++){
                    bigimg[j].removeAttribute("class")
                    signing[j].removeAttribute("class")
                }
                bigimg[c].setAttribute("class","newnew")
                signing[c].setAttribute("class","newnew")
            }
        }
        //动画选项卡
        var biganimation=document.getElementById("big-animation").children
        var animationintroduce=document.getElementById("animation-introduce").children
        var serieshead=document.getElementById("serieshead").children
        var seriesmain=document.getElementById("seriesmain").children
        var smallanimation=document.getElementById("smallanimation").children
        for(var i=0;i<smallanimation.length;i++){
           
            smallanimation[i].setAttribute('index',i)
            smallanimation[i].onmouseenter=function(){
                
                var c=this.getAttribute("index")
               
                for(var j=0;j<smallanimation.length;j++){
                    biganimation[j].removeAttribute("class")
                    animationintroduce[j].removeAttribute("class")
                    serieshead[j].removeAttribute("class")
                    seriesmain[j].removeAttribute("class")
                }
                biganimation[c].setAttribute("class","animationnewnew")

                animationintroduce[c].setAttribute("class","animationnewnew")
                serieshead[c].setAttribute("class","animationnewnew")
                seriesmain[c].setAttribute("class","animationnewnew")
            }
        }
        var animationleft=document.getElementById("animationleft")
        var animationright=document.getElementById("animationright")
        var smallanimation1=document.getElementById("smallanimation")
        var aninum=0;
        animationleft.onclick=function(){
            aninum--;
            if(aninum==-1){
                aninum=5;
            }
            smallanimation1.style.transform='translateX('+-aninum*240+'px)';
        
        }
        animationright.onclick=function(){
            aninum++;
            if(aninum==6){
                aninum=0;
            }
            smallanimation1.style.transform='translateX('+-aninum*240+'px)';
        }
        var upliftedlift=document.getElementById("upliftedlift")
        var upliftedright=document.getElementById("upliftedright")
        var upliftedmain=document.getElementById("upliftedmain")
        var upliftedlist=document.getElementById("upliftedlist").children
        var n=0;
        for(var i=0;i<list.length;i++){
            //动态增加属性
            upliftedlist[i].setAttribute('index',i)
            upliftedlist[i].onclick=function(){
            //获取属性
                n=this.getAttribute('index')
                for(t=0;t<list.length;t++){
                    upliftedlist[t].removeAttribute('class')
                }
                // 圆点变色
                upliftedlist[n].setAttribute('class','thisnew')
                upliftedmain.style.transform='translateX('+-n*584+'px)';
            }
        }
        upliftedright.onclick=function(){
            n++;
                if(n==3){n=0};
                
                // 移动
                upliftedmain.style.transform='translateX('+-n*584+'px)';

                for(t=0;t<list.length;t++){
                    upliftedlist[t].removeAttribute('class')
                }
                // 圆点变色
                upliftedlist[n].setAttribute('class','thisnew')
        }
        upliftedleft.onclick=function(){
            n--;
                if(n==-1){n=2};
                
                // 移动
                upliftedmain.style.transform='translateX('+-n*584+'px)';

                for(t=0;t<list.length;t++){
                    upliftedlist[t].removeAttribute('class')
                }
                // 圆点变色
                upliftedlist[n].setAttribute('class','thisnew')
        }
        //排名选项卡
        var uptab=document.getElementById("uptab").children
        var uplist=document.getElementById("uplist").children
        for(var i=0;i<uptab.length;i++){
            uptab[i].setAttribute('index',i)
            uptab[i].onmouseenter=function(){
                var c=this.getAttribute('index')
                for(t=0;t<uptab.length;t++){
                    uptab[t].removeAttribute('class')
                    uplist[t].removeAttribute('class')
                }
                uplist[c].setAttribute('class','liuniu')
                this.setAttribute('class','niu')
            }
        }

        //人气榜选项卡
        var popularitylist=document.getElementById("popularitylist").children
        var popularitybox=document.getElementById("popularitybox").children
        for( var i=0;i<popularitybox.length;i++){
            popularitybox[i].setAttribute('index',i)
            popularitybox[i].onmouseenter=function(){
                var c=this.getAttribute('index')
                for(t=0;t<popularitybox.length;t++){
                    popularitybox[t].removeAttribute('class')
                    popularitylist[t].removeAttribute('class')
                }
                this.setAttribute('class','niuniu')
                popularitylist[c].setAttribute('class','niuniu')
            }
        }
</script>