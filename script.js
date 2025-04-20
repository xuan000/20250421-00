// 創建花朵並填滿視窗，避開卡片範圍
const createFlowers = () => {
    const flowerCount = 100; // 花朵數量
    const card = document.querySelector('.business-card'); // 選取卡片
    const cardRect = card.getBoundingClientRect(); // 取得卡片的範圍

    for (let i = 0; i < flowerCount; i++) {
        let flower;
        let isOverlapping;

        do {
            // 創建花朵
            flower = document.createElement('div');
            flower.classList.add('flower');

            // 隨機生成花朵的位置
            const left = Math.random() * window.innerWidth;
            const top = Math.random() * window.innerHeight;

            // 設定花朵的位置
            flower.style.left = `${left}px`;
            flower.style.top = `${top}px`;

            // 檢查花朵是否與卡片重疊
            isOverlapping = left >= cardRect.left &&
                            left <= cardRect.right &&
                            top >= cardRect.top &&
                            top <= cardRect.bottom;

        } while (isOverlapping); // 如果重疊，重新生成位置

        document.body.appendChild(flower);
    }
};

// 根據鼠標移動調整花朵大小
document.addEventListener('mousemove', (e) => {
    const flowers = document.querySelectorAll('.flower');
    flowers.forEach(flower => {
        const rect = flower.getBoundingClientRect();
        const distance = Math.hypot(rect.x - e.clientX, rect.y - e.clientY);
        const scale = Math.max(0.5, 2 - distance / 200); // 距離越近，花朵越大
        flower.style.transform = `scale(${scale})`;
    });
});

// 初始化
createFlowers();