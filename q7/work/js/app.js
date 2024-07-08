$(document).ready(function(){
    //読み込みが完全に終わったら処理を実行する
    $(".btn__submit").on('click', function(){
        // アカウント作成ボタンをクリックしたら処理を実行する
        const familyName = $("#family__name").val()
        // idがfamily__nameのフォーム要素の現在地を取得して変数に代入
        const givenName = $("#given__name").val()
        // idがgiven__nameのフォーム要素の現在地を取得して変数に代入
        const birthYear = $("[name = year]").val()
        // nameがyearのセレクトで選択された値を取得して変数に代入
        const birthMonth = $("[name = month]").val()
        // nameがmonthのセレクトで選択された値を取得して変数に代入
        const birthDay = $("[name = day]").val()  
        // nameがdayのセレクトで選択された値を取得して変数に代入  
        const gender = $("[name = gender]:checked").val()
        // nameがgenderのラジオボタンで選択状況にある値を取得して変数に代入
        const work = $("[name = work]").val()
        // nameがworkrのセレクトで選択された値を取得して変数に代入
        const accountName = $("#account__name").val()
        // idがaccount__nameのフォーム要素の現在地を取得して変数に代入
        const email = $("#email").val()
        // idがemailのフォーム要素の現在地を取得して変数に代入
        const password = $("#password").val()
        // idがpasswordのフォーム要素の現在地を取得して変数に代入
        const duplicationPassword = $("#duplication__password").val()
        // idがduplication__passwordのフォーム要素の現在地を取得して変数に代入
        const address = $("#address").val()
        // idがaddressのフォーム要素の現在地を取得して変数に代入
        const tel = $("#tel").val()
        // idがtelのフォーム要素の現在地を取得して変数に代入
        const subscription = $(".subscription__checkbox:checked").val()
        // クラスがsubscription__checkboxのチェックボックスで選択状況にある値を取得して変数に代入


        console.log("名字");
        console.log(familyName);
        console.log("名前");
        console.log(givenName);
        console.log("生年月日");
        console.log(birthYear + "年" + birthMonth + "月" + birthDay + "日");
        console.log("性別");
        console.log(gender);
        console.log("職業");
        console.log(work);
        console.log("アカウント名");
        console.log(accountName);
        console.log("メールアドレス");
        console.log(email);
        console.log("パスワード");
        console.log(password);
        console.log("確認用パスワード");
        console.log(duplicationPassword);
        console.log("住所");
        console.log(address);
        console.log("電話番号");
        console.log(tel);
        console.log("購読情報");
        console.log(subscription);
        // それぞれのカテゴリ名と、フォーム要素の現在値をコンソールに表示
    });
});

