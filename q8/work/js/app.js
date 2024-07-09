$(document).ready(function(){
    // ページが完全に読み込まれたら処理を実行
    let currentSearchWord = '';
    let pageCount = 1;  
    // 現在の検索ワードとページカウントを初期化
    $(".search-btn").on('click', function(){
        // 検索ボタンがクリックされた時に実行する関数を定義
        const searchWord = $("#search-input").val();
        // 検索ワードのinput値を取得して変数に代入
        const list = $(".lists");
        // listsクラスのulを取得して変数に代入
        const title = "タイトル : ";
        const creator = "作者 : ";
        const publisher = "出版社 : ";
        const info = "書籍情報";
        // それぞれリスト表示時に出力したいテキストを変数に代入しておく

        if (searchWord !== currentSearchWord) {
            pageCount = 1;
            currentSearchWord = searchWord;
            list.empty();
        } else {
            pageCount++;
        }
        // 前回の検索ワードと現在の検索ワードを比較。
        // 異なる場合はページカウントをリセットして検索リストをクリア。
        // 同じ場合はページカウントを増加

        const settings = {
          "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
          "method": "GET",
        }
        // AJAXリクエストの設定を行い、検索APIのURLを指定
      
        function displayResult(item){
            const $listItem = $('<li class="lists-item list-inner"></li>');
            // クラスを付与したリスト要素を生成し変数に代入
            const infoLink = $('<a>').text(info).attr({
                'href':item.link['@id'],
                'target':'_blank'
            });//書籍情報からリンク先に飛べるようにaタグにhref設定 
            const authorText = item['dc:creator'] ? item['dc:creator'] : '作者不明';
            // item['dc:creator']がtrueだった場合はそのまま値を返し、falseだった場合は'作者不明'を返す、authorTextという変数を作成
            $listItem.append($('<p>').text(title + item.title));
            $listItem.append($('<p>').text(creator + authorText));
            $listItem.append($('<p>').text(publisher+ item['dc:publisher'][0])); 
            $listItem.append(infoLink);
            return $listItem;
            // 生成されたHTML要素を呼び出し元で使用出来るように、値を返す
        };
        // 検索結果の表示関数を定義。検索結果の各項目をHTML要素として生成し、表示させる

        if(searchWord.trim() === ''){
            displayError('検索キーワードが有効ではありません。<br>1文字以上で検索して下さい。');
            return;
        } // 検索ワードが空でないか確認し、空の場合はエラーメッセージを表示
        $.ajax(settings).done(function (response) {
            // リクエストが成功したときに実行されるコールバック関数を定義
            const result = response['@graph'];
            // レスポンスデータから@graphプロパティを取得し変数に代入⇦検索結果のアイテムが含まれる
            $(".message").remove();
            // 以前に表示されたエラーメッセージなどのメッセージ要素を削除
            if(result && result[0] && result[0].items && result[0].items.length > 0){
                // resultが存在するか、result[0]が存在するか、
                // result[0].itemsが存在するか、またresult[0].items.length > 0で、アイテムが一つ以上存在するか確認
                $.each(result[0].items, function(i, item){
                    list.prepend(displayResult(item));
                    // result[0].items内の各アイテムに対して繰り返し処理
                    // iはアイテムのインデックス、itemは現在のアイテム
                    // 現在のアイテムをHTML要素に変換し、リストの「先頭」に追加
                });
            }else{
                displayError('検索結果が見つかりませんでした。別のキーワードで検索してください。');
            }// アイテムが存在しなかった時のエラーメッセージ
        }).fail(function (err) {
          displayError('検索中にエラーが発生しました。もう一度お試しください。');
        }); // AJAXリクエストを送信し、成功時には検索結果を表示し、失敗時にはエラーメッセージを表示
        function displayError(message){
            $(".message").remove();
            $(".inner").append(`<div class="message">${message}</div>`);
        }; // エラーメッセージを表示するための関数を定義。既存のエラーメッセージをクリアし、新規のメッセージを表示させる
    });
    $(".reset-btn").on('click', function(){
        $("#search-input").val('');  
        $(".lists").empty();
        $(".message").remove();
    });// リセットボタンがクリックされたときに、検索入力フィールドをクリアし、検索結果リストとメッセージを削除
    
      
});
