// opening_sec1

document.addEventListener("DOMContentLoaded", () => {
    const videoSection = document.querySelector(".video1");
    const video = videoSection.querySelector("video");

    let isVideoPlaying = false; // 控制影片是否播放

    // 當滾動到影片區域並且影片尚未播放時
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const videoSectionRect = videoSection.getBoundingClientRect();

        // 當影片區塊進入視窗中間時，設定為 sticky 並播放影片
        if (videoSectionRect.top <= windowHeight / 2 && videoSectionRect.bottom >= windowHeight / 2 && !isVideoPlaying) {
            video.play();
            isVideoPlaying = true;
            videoSection.classList.add("sticky");
        }

        // 如果影片播放完畢，允許使用者滾動到下一個區塊
        if (video.paused) {
            window.removeEventListener("scroll", preventScroll);
        }
    });

    // 防止頁面自動滾動到下一個區塊，直到影片播放完畢
    const preventScroll = (e) => {
        if (isVideoPlaying && !video.paused) {
            e.preventDefault();
            e.stopPropagation();
        }
    };

    // 影片播放完畢後觸發
    video.addEventListener("ended", () => {
        // 播放完畢後移除 sticky 類別
        videoSection.classList.remove("sticky");

        // 允許滾動到下一個區塊
        window.addEventListener("scroll", preventScroll, { passive: false });
    });

    // 在影片播放期間禁用滾動
    window.addEventListener("scroll", preventScroll, { passive: false });
});




// sec2
document.addEventListener("scroll", () => {
    // 處理第一個影片
    const section = document.querySelector(".sec2-video-section");
    const video = document.querySelector("#sec2-scrollVideo");

    if (video) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;
        const sectionEnd = sectionTop + sectionHeight - window.innerHeight;

        if (scrollY >= sectionTop && scrollY <= sectionEnd) {
            const progress = (scrollY - sectionTop) / (sectionHeight - window.innerHeight);
            const videoProgress = progress * video.duration;
            video.currentTime = videoProgress;
        }
    }

    // 處理第二個影片
    const sectionTwo = document.querySelector(".sec2-video-section-two");
    const videoTwo = document.querySelector("#sec2-scrollVideoTwo");

    if (videoTwo) {
        const sectionTopTwo = sectionTwo.offsetTop;
        const sectionHeightTwo = sectionTwo.offsetHeight;
        const scrollY = window.scrollY;
        const sectionEndTwo = sectionTopTwo + sectionHeightTwo - window.innerHeight;

        if (scrollY >= sectionTopTwo && scrollY <= sectionEndTwo) {
            const progressTwo = (scrollY - sectionTopTwo) / (sectionHeightTwo - window.innerHeight);
            const videoProgressTwo = progressTwo * videoTwo.duration;
            videoTwo.currentTime = videoProgressTwo;
        }
    }
});




// sec3
$(function () {
    const videoElement = $("#sec3-video").get(0); // 取得影片元素
    const documentHeight = $(document).height(); // 整個文件的高度
    const windowHeight = $(window).height(); // 視窗的高度
    const maxScroll = documentHeight - windowHeight; // 最大可滑動距離

    // 確保影片不會自動播放
    videoElement.pause();

    $(window).on("scroll", function () {
        const scrollPosition = $(document).scrollTop(); // 當前滾動距離

        if (videoElement.duration) {
            // 計算影片進度 (百分比)
            const videoProgress = scrollPosition / maxScroll;
            // 根據進度設置影片播放時間
            videoElement.currentTime = videoElement.duration * videoProgress;
        }
    });
});



// sec4

const flyingTexts = [
    document.getElementById("flying-text-1"),
    document.getElementById("flying-text-2"),
    document.getElementById("flying-text-3"),
    document.getElementById("flying-text-4")
];

const flyingImages = [
    document.getElementById("flying-image-1"),
    document.getElementById("flying-image-2"),
    document.getElementById("flying-image-3"),
    document.getElementById("flying-image-4")
];

flyingTexts[0].style.visibility = "hidden";

let stage = 0;

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 9200 && stage === 0) {
        flyingTexts[0].style.visibility = "visible";
        flyingTexts[0].style.transform = "translateX(-50%) translateY(0)";
        flyingTexts[0].style.opacity = "1";
        flyingImages[0].style.transform = "translateX(-50%) translateY(0)";
        flyingImages[0].style.opacity = "1";
        stage = 1;
    }
    // 第二階段：第二張圖和第二段文字
    else if (scrollPosition > 9700 && stage === 1) {
        flyingTexts[0].style.opacity = "0";
        flyingTexts[1].style.transform = "translateX(-50%) translateY(0)";
        flyingTexts[1].style.opacity = "1";
        flyingImages[1].style.transform = "translateX(-50%) translateY(0)";
        stage = 2;
    }
    // 第三階段：第三張圖和第三段文字
    else if (scrollPosition > 10400 && stage === 2) {
        flyingTexts[1].style.opacity = "0";
        flyingTexts[2].style.transform = "translateX(-50%) translateY(0)";
        flyingTexts[2].style.opacity = "1";
        flyingImages[2].style.transform = "translateX(-50%) translateY(0)";
        stage = 3;
    }
    // 第四階段：第四張圖和第四段文字
    else if (scrollPosition > 11000 && stage === 3) {
        flyingTexts[2].style.opacity = "0";
        flyingTexts[3].style.transform = "translateX(-50%) translateY(0)";
        flyingTexts[3].style.opacity = "1";
        flyingImages[3].style.transform = "translateX(-50%) translateY(0)";
        stage = 4;
    } else if (scrollPosition > 11750 && stage === 4) {
        flyingTexts[0].style.opacity = "0";
        flyingTexts[0].style.visibility = "hidden"; // 隱藏第一段文字
        flyingImages[0].style.opacity = "0";
        flyingImages[0].style.visibility = "hidden"; // 隱藏第一張圖片
        flyingTexts[1].style.opacity = "0";
        flyingTexts[1].style.visibility = "hidden"; // 隱藏第二段文字
        flyingImages[1].style.opacity = "0";
        flyingImages[1].style.visibility = "hidden";
        flyingTexts[2].style.opacity = "0";
        flyingTexts[2].style.visibility = "hidden"; // 隱藏第三段文字
        flyingImages[2].style.opacity = "0";
        flyingImages[2].style.visibility = "hidden"; //
        flyingTexts[3].style.opacity = "0";
        flyingTexts[3].style.visibility = "hidden"; // 隱藏第四段文字
        flyingImages[3].style.opacity = "0";
        flyingImages[3].style.visibility = "hidden"; // 隱藏第四張圖片
        stage = 5; // 完全結束階段
    }

    // 回捲邏輯
    else if (scrollPosition <= 200) {
        flyingTexts.forEach((text, index) => {
            text.style.transform = "translateX(-50%) translateY(500%)";
            text.style.opacity = index === 0 ? "1" : "0";
        });

        flyingImages.forEach((image) => {
            image.style.transform = "translateX(-50%) translateY(100%)";
        });

        stage = 0;
    }
});

// sec5

$(document).ready(function () {
    const sec5Horizontal = $("#sec5-horizontal");
    const sec5Container = $(".sec5-sticky").parent();

    $(window).scroll(function () {
        // Sticky 區域的範圍
        const containerTop = sec5Container.offset().top;
        const containerHeight = sec5Container.height();
        const stickyHeight = $(".sec5-sticky").height();

        // 計算在 Sticky 區域內的滾動進度
        const scrollTop = $(window).scrollTop();
        const scrollInContainer = Math.min(
            Math.max(0, scrollTop - containerTop),
            containerHeight - stickyHeight
        );

        // 計算圖片橫向平移的最大距離
        const maxScrollLeft = sec5Horizontal.width() - $(window).width();
        const scrollProgress = scrollInContainer / (containerHeight - stickyHeight);

        // 設定橫向平移效果
        const newLeft = -scrollProgress * maxScrollLeft;

        sec5Horizontal.css({
            transform: `translateX(${newLeft}px)`
        });
    });
});



// sec6

function animateTextBoxes() {
    const sections = document.querySelectorAll(".opinion");

    sections.forEach((section) => {
        const textBoxes = section.querySelectorAll(".text-box6");

        textBoxes.forEach((box, index) => {
            const boxTop = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (boxTop < windowHeight * 0.8) {
                setTimeout(() => {
                    box.classList.add("visible");
                }, index * 200); // Stagger the animation
            }
        });
    });
}

// Run on scroll and initial load
window.addEventListener("scroll", animateTextBoxes);
window.addEventListener("load", animateTextBoxes);

// sec7
// ending