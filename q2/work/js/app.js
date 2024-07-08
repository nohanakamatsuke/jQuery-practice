$(document).ready(function(){
    // ページが組み立てられたら、処理を実行する
    $(".modal_open_button").on('click', function(){
        // 選択した、セレクタをクリックした時に処理を実行する
        $(".modal_win").fadeIn();
        // display:noneにしていた要素をフェードイン
    });
    $(".modal_close_button").on('click', function(){
        // クローズボタンをクリックした時に処理を実行する
        $(".modal_win").fadeOut();
        // 表示させていた要素をフェードアウト
    });
});