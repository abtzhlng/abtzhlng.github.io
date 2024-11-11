window.addEventListener('scroll', function () {
    const markers = document.querySelectorAll('.marker');
    const years = document.querySelectorAll('.year');
    const triggerHeight = window.innerHeight * 0.3; // 設定觸發點為視窗高度的30%

    years.forEach((year, index) => {
        const yearTop = year.getBoundingClientRect().top; // 獲取年份區塊相對於視窗的位置
        if (yearTop <= triggerHeight && yearTop >= 0) {
            // 確保 markers[index] 存在，才執行 add 或 remove
            if (markers[index]) {
                markers[index].classList.add('active');
            }
        } else {
            if (markers[index]) {
                markers[index].classList.remove('active');
            }
        }
    });
});
