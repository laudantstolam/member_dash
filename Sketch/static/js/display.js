// function hideAndSetCSS() {
//     // 尋找所有 class 為 "twitter-tweet" 的 iframe 元素
//     var twitterEmbeds = document.querySelectorAll('.twitter-tweet');

//     // 迭代處理每個 iframe 元素
//     twitterEmbeds.forEach(function(embed) {
//         // 監聽 iframe 的載入事件
//         embed.addEventListener('load', function() {
//             // 隱藏載入完成的 iframe
//             embed.style.display = 'none';
//         });
//     });
// }

// window.onload = function() {
//     hideAndSetCSS();
//     console.log("onload");
// };

document.addEventListener("DOMContentLoaded", function() {
    // 获取 embed 元素
    var embedElement = document.getElementById("app");

    // 监听 embed 元素的加载事件
    embedElement.addEventListener("load", function() {
      // 加载完成后将主要内容显示
      document.body.style.display = "none";
    });
  });

