$("document").ready(function(){
    // ページを読み込んだら処理を実行
    $(".center:first .btn").css("color", "green");
    // .center１番目の.btn要素に対して、CSSで文字の色をgreenに指定
    $(".center:eq(1) .btn").on('click', function(){
        // .center２番目の .btn要素に対して、clickを行ったときに処理を実行
        $(".center:eq(1) .btn").css("background-color", "rgba(247,166,161,1)");
        // 指定したセレクタに対して、CSSで背景色を指定の色にする
    });  
    $(".center:eq(2) .btn").on('click', function(){
        // .center３番目の　.btn要素に対して、clickを行った時に処理を実行
        $(".center:eq(2) .btn").fadeOut(3000);
        // 指定したセレクタに対して、３秒かけてフェードアウトさせる
    });
    $(".center:eq(3) .btn").on('click', function(){
        // .center４番目の　.btn要素に対して、clickを行った時に処理を実行
        $(".center:eq(3) .btn").css({
        // .指定したセレクタに対して、cssを変更する
            "width": "300px",
            // 横幅を300px
            "padding": "50px 0",
            // 要素内空白の縦幅を広げる
            "font-size": "20px"
            // 文字の大きさを大きくする
        });
    });
    $(".center:eq(4) .btn").on('click', function(){
        // .center５番目の　.btn要素に対して、clickを行った時に処理を実行
        const btn = $("#q5");
        // 問題５番のbtnのidをbtn定数に代入
        const parentDiv = btn.parent();
        // 問題５番の.centerのみ取得したいので、上記のbtnの親要素を指定。parentDivに代入する
        btn.css({
            "display": "flex",
            "justify-content": "center",
        });
        // 横並びにして、上下中央揃える
        parentDiv.css({
            "display": "flex",
            "justify-content": "center",
            "align-items": "center"           
        });
        // 同じく横並びにして、上下中央揃える。

        const newDomBefore = `<div class="newDomBefore">DOMの前</div>` 
        const newDomAfter = `<div class="newDomAfter">DOMの後</div>`
        const newDomInsideBefore = `<div class="newDomInsideBefore">DOMの中の前</div>`
        const newDomInsideAfter = `<div class="newDomInsideAfter">DOMの中の後</div>`
        // 挿入したいhtml文章を定数に代入
        btn.before(newDomBefore)
        // btnの要素の前に挿入
        btn.after(newDomAfter)
         // btnの要素の後に挿入
        btn.prepend(newDomInsideBefore)
         // btnの要素の中身の最初に挿入
        btn.append(newDomInsideAfter)
         // btnの要素の中身の最後に挿入
    });
    $(".center:eq(5) .btn").on('click', function(){
        // .center６番目の　.btn要素に対して、clickを行った時に処理を実行
        $(".center:eq(5) .btn").animate({
            // 指定したセレクタに対してアニメーションをかける
            "margin-top": "100",
            "margin-left": "100"
            // アニメーションをつけたいことをCSSで指定
        },2000);
        // アニメーションの時間を２秒かけて動かす
    });
    $(".center:eq(6) .btn").on('click', function(){
        // .center7番目の　.btn要素に対して、clickを行った時に処理を実行
        const elementId = $(this).attr('id');
        // 選択したセレクタのid属性の値を取得
        const node = document.getElementById(elementId);
        // 取得したId属性の値から、HTMLの要素ノードを取得し、変数nodeに代入
        console.log(node);
        //変数nodeをコンソールに出力
    });
    $(".center:eq(7) .btn").hover(function(){
        // .center８番目の　.btn要素に対して、hoverを行った時に処理を実行
        $(this).css({
            // .指定したセレクタに対して、cssを変更する
                "width": "300px",
                // 横幅を300px
                "padding": "50px 0",
                // 要素内空白の縦幅を広げる
                "font-size": "20px"
                // 文字の大きさを大きくする
            });
         },
         function() { 
            // マウスアウト時の処理
            $(this).css({
              "width": "200px", // 元のサイズに戻す
              "padding": "25px 0", // 元の余白に戻す
              "font-size": "inherit" // 文字サイズを戻す
            });
         }
    );
    $("#q9 li").on('click', function(){
        // idの値がq9の、li要素に対してクリックを行った時に処理を実行
        const index = $("#q9 li").index(this);
        //　セレクタに対してindex番号を取得するメソッドで値を取得して変数に代入。
        // thisを引数として渡すことで、クリックしたオブジェクトが代入されている。
        alert(index); 
        // アラートメソッドで変数indexを表示
    });
    $("#q10 li").on('click', function(){
        // idの値がq10の、li要素に対してクリックを行った時に処理を実行
        const index = $("#q10 li").index(this);
        // q10のli要素の中でクリックしたオブジェクトのindex番号を取得して変数indexに代入
        $("#q11 li").eq(index).css("font-size", "30px");
        // eqメソッドで、q10のindexを使用し、q11へのcss変更に使う。
    });
    
});