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
    $('#element').on('click', function (e) {
        Custombox.open({
            target: '#modal',
            effect: 'fadein'
        });
        e.preventDefault();
    });
    
    $("#btn-register").attr("data-target", "#register");
    
    $("#cont1").click(function(){
        $("#collapse1").removeClass("in");
        $("#collapse2").addClass("in");
       $(".course-description2").hide();
       $(".course-description2:first").show();
    });
    
    $("#btn-register").click(function () {
        $("#collapse1").addClass("in");
        $("#collapse2").removeClass("in");
        $("#collapse3").removeClass("in");
        $(".course-description").hide();
        $(".course-description:first").show();
    });
    $(".modal-footer .btn-primary").click(function () {
       
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
    });
    $("input[name='pay']").on("click", function () {
         if ($("input[name='pay']:checked").val()=="ck") {
            $("#content_ck").show();
        } else{
            $("#content_ck").hide();
        }
         if ($("input[name='pay']:checked").val()=="techmaster") {
            $("#tec").show();
        } else{
            $("#tec").hide();
        }
        if ($("input[name='pay']:checked").val()=="home") {
            $("#hom").show();
        } else{
            $("#hom").hide();
        }
    });
});

