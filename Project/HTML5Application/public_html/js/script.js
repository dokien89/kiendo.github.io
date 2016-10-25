/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    $(".nav-pills li").click(function () {
        $(".nav-pills li").removeClass("active");
        $(this).addClass("active");
    });
//                    $('#myModal').modal('show');
    $('#element').on('click', function (e) {
        Custombox.open({
            target: '#modal',
            effect: 'fadein'
        });
        e.preventDefault();
    });
    $("#btn-register").attr("data-target", "#register");
    $("#btn-register").click(function () {
        $(".course-description").hide();
        $(".course-description:first").show();
    });
    $(".modal-footer .btn-primary").click(function () {
        $(".course-description2").hide();
        $(".course-description2:first").show();
    });
    $("input[type='radio']").on("click", function () {
        if ($("input[type='radio']:checked").val()=="save") {
            $("#sav").show();
        } else{
            $("#sav").hide();
        }
        if ($("input[type='radio']:checked").val()=="standard") {
            $("#sta").show();
        } else{
            $("#sta").hide();
        }
        if ($("input[type='radio']:checked").val()=="training") {
            $("#tra").show();
        } else{
            $("#tra").hide();
        }
        if ($("input[type='radio']:checked").val()=="content_ck") {
            $("#content_ck").show();
        } else{
            $("#content_ck").hide();
        }
    });
    
    
    
    
//    $("#save, #standard", "#training").change(function () {
//        if ($("#save").is(":checked")) {
//            $('#sav').show();
//        }
//        else{
//            $('#sav').hide();
//        } 
//            
//        if ($("#standard").is(":checked")) {
//            $('#div2').show();
//        }
//        else 
//            $('#div3').show();
//    });        

});

