let currentItemIndex = 0;
const itemLimit = 50;
const itemsPerLoad = 10;
let isLoading = false;

document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    window.location.href = 'about.html';
});

function loadMoreItems() {
    if (isLoading) return;
    isLoading = true;

    setTimeout(() => {
        if (currentItemIndex >= itemLimit) {
            console.log("No more items to load");
            isLoading = false;
            return;
        }

        for (let i = 0; i < itemsPerLoad && currentItemIndex < itemLimit; i++) {
            const profileContainer = document.createElement('div');
            profileContainer.classList.add('user-profile');

            const img = document.createElement('img');
            img.src = `https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGRvMnFhaGMxbWFjMmFtem14OXNqcXV6ZWo1cTd6cnBlOXRyMW9jciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41lGnxllmN3YqOyI/giphy.webp${currentItemIndex + 1}`;
            profileContainer.appendChild(img);

            const userInfo = document.createElement('p');
            userInfo.textContent = `User ${currentItemIndex + 1}`;
            profileContainer.appendChild(userInfo);

            document.getElementById('profiles-container').appendChild(profileContainer);

            currentItemIndex++;
        }

        isLoading = false;
    }, 1000);
};
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        loadMoreItems();
    }
});

loadMoreItems();

const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    const boxes = [
        document.getElementById('box1'),
        document.getElementById('box2'),
        document.getElementById('box3'),
        document.getElementById('box4'),
        document.getElementById('box5'),
        document.getElementById('box6')

    ];

    boxes.forEach((box, index) => {
        if (!box.isDragging) {
            switch (index) {
                case 0:
                    box.style.transform = `translate(${scrollPosition * 0.3}px, ${scrollPosition * 2}px)`;  // Down-right
                    break;
                case 1:
                    box.style.transform = `translate(-${scrollPosition * 0.3}px, ${scrollPosition * 3}px)`; // Down-left
                    break;
                case 2:
                    box.style.transform = `translate(${scrollPosition * 0.2}px, ${scrollPosition * 6}px)`;  // Down-right, slower
                    break;
                case 3:
                    box.style.transform = `translate(-${scrollPosition * 0.4}px, ${scrollPosition * 4}px)`; // Down-left, faster
                    break;
                case 4:
                    box.style.transform = `translate(${scrollPosition * 0.25}px, ${scrollPosition * 5}px)`;  // Down-right, medium speed
                    break;
                case 5:
                    box.style.transform = `translate(-${scrollPosition * 0.2}px, ${scrollPosition * 2}px)`; // Down-left, slower
                    break;
            }
        }
    });
});

function makeDraggable(element) {
    let isDragging = false;
    let dragStartX, dragStartY, currentX, currentY, boxX, boxY;

    element.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDragging = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        boxX = parseInt(window.getComputedStyle(element).left, 10) || 10;
        boxY = parseInt(window.getComputedStyle(element).top, 10) || 10;

        element.style.cursor = 'grabbing';
        element.style.zIndex = 1000;
    });

    window.addEventListener('mousemove', (e) => {
        if (isDragging) {
            e.preventDefault();

            currentX = e.clientX;
            currentY = e.clientY;

            const deltaX = currentX - dragStartX;
            const deltaY = currentY - dragStartY;

            element.style.left = `${boxX + deltaX}px`;
            element.style.top = `${boxY + deltaY}px`;
        }
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
        element.style.cursor = 'grab';
        element.style.zIndex = '';
    });
}

const boxes = document.querySelectorAll('.content-box');
boxes.forEach(box => makeDraggable(box));

const video8 = document.getElementById('video8');
const video17 = document.getElementById('video17');

function changeBackground(colorClass) {
    document.body.classList.add(colorClass);
}

function resetBackground(colorClass) {
    document.body.classList.remove(colorClass);
}

video8.addEventListener('mouseover', () => changeBackground('hover-bg-video8'));
video8.addEventListener('mouseout', () => resetBackground('hover-bg-video8'));

video17.addEventListener('mouseover', () => changeBackground('hover-bg-video17'));
video17.addEventListener('mouseout', () => resetBackground('hover-bg-video17'));

function showVideo(boxId, videoId) {
    const popup = document.getElementById('video-popup');
    const iframe = document.getElementById('youtube-video');

    const randomX = Math.floor(Math.random() * (window.innerWidth - 600));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 400));

    popup.style.left = randomX + 'px';
    popup.style.top = randomY + 'px';
    popup.style.display = 'block';

    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;

    const closeBtn = document.getElementById('close-btn');
    closeBtn.onclick = function () {
        closeVideo();
    };

    document.addEventListener('click', function handleClickOutside(event) {
        if (!popup.contains(event.target) && !document.getElementById(boxId).contains(event.target)) {
            closeVideo();
            document.removeEventListener('click', handleClickOutside);
        }
    });
}

function closeVideo() {
    const popup = document.getElementById('video-popup');
    const iframe = document.getElementById('youtube-video');
    popup.style.display = 'none';
    iframe.src = '';
}

