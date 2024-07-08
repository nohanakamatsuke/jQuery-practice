$(document).ready(function(){
    // HTMLの読み込みが完了したら実行
    $(".dropdwn li").hover(function(){
        // 選択したセレクタをホバーした時に処理を実行
        $(this).children(".dropdwn_menu").stop().slideToggle(500);
        // 選択した親セレクタに対する子要素をスライドダウンさせる。
        // その際に、アニメーションの連続を防ぐためstop()を使用
    });
});
