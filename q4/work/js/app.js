$(document).ready(function(){
    // HTMLの読み込みが完了したら実行
    $(".nav-item").on('click', function(){
        // 選択したセレクタをクリックした時に処理を実行
        const index = $(this).index();
        // クリックをした値のindex番号を取得して、index変数に代入
        const descriptionItems = $(".description li")
        // クリックしたnav-itemに対応する、descriptionのli要素を取得しdescriptionItemsに代入
        descriptionItems.hide();
        // 全てのdescriptionを非表示にする
        $(descriptionItems[index]).show();
        // クリックされたnav-itemに対応するdescriptionのli要素を表示する
    });
});