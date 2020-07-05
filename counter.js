// 當頁面準備完成時
$(document).ready(function(){

    // 當視窗捲動時
    $(window)..scroll(function () { 
        
        $("*").each(function (index, element) {
            // element == this當下搜尋的元素
            // var 變數=資料
            var offset = $(this).offset();                       取得元素位移資料
            var top = offset.top;
           
            var windowTop = $(window).scrollTop();
            
            // 取得參數:數字時間和位移.
            
            var number = $(this).attr("data-counter-number");
            var time = $(this).attr("data-counter-time");
             var offset = $(this).attr("data-counter-offset");
             // 判斷式
             // 如果 發生甚麼事 就...
             //  if (條件) {程式}
             if(windowTop > top - offset) {
                 //console.log("開始執行動畫...");
                  // 選取.動畫({參數}，{選項})
                  $(this).animate({
                     num : number                                    // 數字
                     }, {
                         duration: parseInt(time),                   // 時間 - duration 需要數字 - parseInt() 將字串轉為整數
                         step: (now) => {                            // 步驟
                             $(this).text(Math.floor(now));       // 文字(步驟) - Math.floor() 去小數點
                     }
                })
            }
        });
    });
});