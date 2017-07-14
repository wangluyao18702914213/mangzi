  $(function(){


function creatbanner(selector,num){
    //生成dom
    var i,str='';
    for(i=0;i<num;i++){
        str += `<li>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </li>`
    }
    $(selector).prepend($('<ul><ul>').html(str));
    //轮播图
       /*定义图片索引*/
        var index=0;
        /*添加节流阀  true说明本次单击会有响应处理*/
        var flag=true;
        /*下一张*/
        $(".next").on("click",function(){
            nextpic();
        });


    function nextpic(){
            if(flag==true){
                /*设置节流阀*/
                flag=false;
                index--;
                $(".view li").each(function(key,value){ 
                    $(this).css({
                        "transform":"rotateX("+(index*90)+"deg)",
                        "transition-delay":(key*0.2)+"s"
                    });
                });
                setTimeout(function(){
                    flag=true;
                },2500);
            }
        }
            // 上一张
        $(".pre").on("click",function(){
            if(flag==true){
                flag=false;
                index++;
                $(".view li").each(function(key,value){ 
                    $(this).css({
                        "transform":"rotateX("+(index*90)+"deg)",
                        "transition-delay":(key*0.2)+"s"
                    });
                });
                setTimeout(function(){
                    flag=true;
                },2500);
            }
        });
        // // 定时器
        // setInterval(function(){
        //     nextpic();
        // },5000)
}

creatbanner('.view',10);
      

            //logo 动画切换
  
        $('.logo').on('mouseover',function(){
           $(this).find('a').addClass('showlogo').next().addClass('showtext')
        }).on('mouseout',function(){
            $(this).find('a').removeClass();
            $(this).find('span').removeClass().addClass('hidtext')
        })


    });