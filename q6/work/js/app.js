$(document).ready(function() {
    $('.select-box').on('change', function() {
    // セレクタの値が変更されたら、処理を実行
      const category = $(this).val();
    //   指定されたセレクタの、value値を取得して変数に代入する
      $(".food-list li").each(function(){
        // liに対して繰り返し処理を行う
        const $item = $(this);
        // ループで処理されている特定のli要素を変数に代入
        if(category === 'all'|| $item.attr('data-category-type') === category) {
        // 変更されたvalue値がallだった場合か、現在処理されているli要素のdata値がセレクトボックスで選択されたカテゴリと完全に一致したら処理を実行する
          $item.show();
        // trueの場合li要素を表示する
        }else{
          $item.hide();
        //falseの場合li要素を非表示にする
        }
      });
    });
  });;


// $itemの＄はjqueryオブジェクトを含んでいることを示す！！！
// 属性値取得はattrメソッド
