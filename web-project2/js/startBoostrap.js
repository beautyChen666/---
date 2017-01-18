/**
 * Created by rimi on 16/12/5.
 */
;$(function () {
    // first page header nav settings
    $('#mynav').affix({
        offse:{top:70}
    });

    // 点击导航栏a跳到对应页面的动画
    $('a.page-scroll').bind('click',function (event) {
        var $that=$(this);
        // $that.parent().css('background-color','transparent');
        $('html,body').stop().animate({
           scrollTop:($($that.attr('href')).offset().top)
        });
        event.preventDefault();
    });
    $('ul li a').click(function () { /*缩小的时候导航栏所在一起,单点一个导航栏收起来*/
       $('.navbar-toggle:visible').click();
    });
    // $(window).scroll(function () {
    //     if(window.innerWidth>769){
    //     if($(document).scrollTop()>0){
    //         $('.logoC').css('font-size','18px');
    //         $('.navbar').animate({paddingTop:'10px'},100);
    //         $('.navbar').css({'background-color':'#222'});
    //     }
    //     else{
    //         $('.logoC').css('font-size','22px');
    //         $('.navbar').animate({paddingTop:'20px'},100);
    //         $('.navbar').css({'background-color':'transparent'});
    //     }
    //     }
    //     else {
    //         $('.navbar').css({'background-color':'#222','font-size':'18px','paddingTop':'5px'});
    //     }
    // });
    // contact me form verify
    var name=$('#name'),  //uesername
        tel=$('#tel'),     //tellnumber
        mess=$('#message'), //meseeage
        email=$('#email'), //email
        submit=$('#submit'); //meseeage

        // 聚焦时候清空val
//     $('.form-control').each(function (index,element) {
//         $(this).focus(function () {
//         if($(this).val()==='')  $(this).next().text(' ');
//     });
// });
        // 验证是否为空
    function isNull() {
        $('.form-control').each(function (index,element) {
            event.preventDefault();
            $(this).focus(function () {
                if($(this).val()==='')  $(this).next().text(' ');
            });
            if($(this).val()===''){
                $(this).next().text('PLEASE ENTER'+' '+this.placeholder);
            }
            else if($(this).next().text()===''){
                $('#signReturn').text('sorry'+' '+name.val() +' ,it seems that my mail server is not responding.Please try agin later!');
                // return false;
            }
            // event.preventDefault();
        });
    }

    // meail verify
    email.keyup(function () {
        var pattern=(/^\w+@[a-z0-9]+\.([a-z]){1,3}$/);
        flag = pattern.test($(this).val());
        if($(this).val()!=''){
            if(!flag) $(this).next().text('Not a valid email address');
            else $(this).next().text(' ');
        }
        else $(this).next().text(' ');
    });

    // tell verify
    tel.keyup(function () {
        var pattern=(/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/);
        flag = pattern.test($(this).val());
        if($(this).val()!=''){
            if(!flag) $(this).next().text('Not a valid tellnumber');
            else $(this).next().text(' ');
        }
        else $(this).next().text(' ');
    });
    
    // submit click verify
    submit.bind('click',function (event) {
        isNull(event);
    });
    // submint verify close
    $('.signBTn').click(function () {
        $(this).prev().text('');
    });
    // modal json for change
    $('.pro-shade').each(function (i) {
        var shade=$('.pro-shade');
        $(this).attr('data-i',i);
        $(shade[i]).click(function () {
            $.getJSON('js/startBoostrap.json',function (data) {
                var k=$(shade[i]).attr('data-i');
                // console.log(data[k].url);
                $('#myModalLabel').text(data[k].name);
                $('#modalImg').html('<img class="img-responsive img-centered"  src='+data[k].url+'  alt="img loading..." title="showimg">');
            });
        });
    });

});