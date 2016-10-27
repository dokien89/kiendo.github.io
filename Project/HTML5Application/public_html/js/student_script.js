/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function (){
    $('#mycourse_li').addClass('active');
    $('#report').hide();
    $('#record').hide();
    $('#cert').hide();
    $('.sidebar_link').click(function(){
        $('.sidebar_link').removeClass("active");
        $(this).addClass("active");
        $('#content .row').hide();
        var idDiv = String($(this).attr("id"));
        var res =idDiv.substr(0, idDiv.length - 3);
        res = '#' + res; 
        $(res).show();
    });
});
