$(document).ready(function(){
    //ページの HTMLの組み立てが完了した時に処理を実行
    $(".drawer_button").on('click', function(){
        // セレクタをクリックした時に処理を実行する
        $(".drawer_nav_wrapper").toggleClass("open");
        // .drawer_nav_wrapperに.open のクラスを付与して、メニューバーを表示する
        $(".drawer_button").toggleClass("active");
        // .drawer_buttonに.active のクラスを付与し、MENUボタンを非表示にして、CLOSEボタンを表示する
        $(".drawer_bg").fadeToggle();
        // displayで非表示にしていた、背景色を表示したり非表示にしたりする
        // fadeToggleメソッドを使用することでゆっくりと表示、非表示にする
        // toggleメソッドを使うことで表示・非表示を簡潔に実現できる
    });
});