/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    $("#btn-excer").click(function () {
        window.location.href = 'code-online.html';
    });
    $('.btn_quiz').click(function () {
        $('#question1').show();
        $('#question2').hide();
    });
    $('#next_quiz').click(function () {
        $('#question1').hide();
        $('#question2').show();
    });
    $(".lesson").click(function () {
        var string = "video_learn_online/" + $(this).attr("href").substring(1) + ".mp4";
        var video = '<video controls> <source src="' + string + '" type="video/mp4"></video>';
        $("#lesson_video").html(video);
        $("#lesson_title").text($(this).text());
    });

    $("#tabs_coding").tabs();

    $(".lesson_mobile").click(function () {
        var string = "video/" + $(this).attr("href").substring(1) + ".mp4";
        var video = '<video controls> <source src="' + string + '" type="video/mp4"></video>';
        $("#lesson_video").html(video);
        $('#overlay').panel('close');
    });

    $(window).resize(function () {
        if (window.matchMedia('(min-width: 992px)').matches) {
            $('#overlay').panel('close');
        } else if ($(this).width() < 1280 && $(this).width() >= 980) {

        } else {

        }
    });

    $('#get_excersice').click(function () {
        window.location.hash = "challenge";
    });

    $('#runCode').click(function () {
        $('#result_code').html(
                '<style></style><body><p><b>Note:</b> This example does not work in Internet Explorer 9 and earlier versions.</p><div></div></body>');
    });

    $('#next_quiz').click(function () {
        $('#question2').hide();
    });
});
