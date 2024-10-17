function openRandomPopup(popupId) {
    const popup = document.createElement('div');
    popup.classList.add('popup');

    switch (popupId) {
        case 'popup1':
            popup.innerHTML = '<h2>a new way to connect</h2><p>welcome to loom. this platform was created to challenge the conventional norms of social media and web design. inspired by olia lialina’s vernacular web, loom seeks to disrupt the rigid grid layouts that dominate the internet today. it invites users to confront the limitations imposed by structured design. similar to mainstream platforms, most elements of this site are neatly aligned and predictable. there are, some surprises that disrupt your casual viewing as you interact. in terms of connectivity, loom aims to emphasize fluidity and unpredictability, mirroring the chaotic yet beautiful nature of human relationships. it’s a space where the user experience becomes part of the story, intentionally breaking free from the polished aesthetics that govern most digital spaces. loom seeks to create a conversation about the potential of web design to foster genuine interaction rather than just engagement.</p>';
            break;
        case 'popup2':
            popup.innerHTML = '<h2>concept behind</h2><p>in a world where websites often adhere to predictable templates, loom embodies a different approach. here, not all content fits neatly into boxes. instead, it spills over, intertwines, and erupts reflecting the complexities of human connection. though the design of this site is visually very palatable, this isn’t about polished aesthetics; it’s about embracing the disorder inherent in our interactions. by intentionally disrupting clean lines and structured layouts, loom allows the messiness of online relationships to come to the forefront. the design and imagined content speaks to the non-linear nature of connection, where communication often flows unpredictably, much like how our thoughts and emotions do. loom’s concept is rooted in the belief that design should be a reflection of life, full of imperfections that make it authentic and real.</p>';
            break;
        case 'popup3':
            popup.innerHTML = '<h2>commentary on modern web design</h2><p>today’s web development practices have become increasingly standardized. although web tools make it easy to create functional websites, they often strip away creativity and individuality. loom stands as a critique of this trend. by intentionally breaking the grid, it raises questions about the nature of online engagement and the structures that govern it. standardized designs may streamline content delivery, but they also box users into constrained ways of interacting. loom’s deviation from the grid is not just a design choice—it’s a statement about the need for freedom in digital spaces. in an age of templates and algorithms that dictate what we see, loom opens the door to a more organic and meaningful form of digital interaction, where creativity and human connection come first.</p>';
            break;
        case 'popup4':
            popup.innerHTML = '<h2>an experimentation in connection</h2><p>ultimately, loom is more than just a social network. it is an experiment in rethinking how we connect online. by disrupting traditional layouts, it challenges users to engage with content in a more profound and meaningful way. this platform serves as a prototype for what web design could become—a space where chaos and connection coexist, forcing us to reconsider our understanding of the digital landscape. loom isn’t just about creating a visual experience; it’s about changing the way we think about interaction itself. through its unconventional approach, loom asks us to slow down, to think critically about the connections we form online, and to embrace the idea that imperfection, unpredictability, and chaos can lead to deeper, more authentic interactions. it’s an invitation to explore the web not as a static, structured environment, but as a living, breathing entity that evolves with us.</p>';
            break;
    }


    document.body.appendChild(popup);
    makeDraggable(popup);
}

function makeDraggable(element) {
    let isDragging = false;
    let dragStartX, dragStartY, initialX, initialY;

    element.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDragging = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        initialX = parseInt(window.getComputedStyle(element).left, 10);
        initialY = parseInt(window.getComputedStyle(element).top, 10);
        element.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
        if (isDragging) {
            e.preventDefault();
            const deltaX = e.clientX - dragStartX;
            const deltaY = e.clientY - dragStartY;
            element.style.left = `${initialX + deltaX}px`;
            element.style.top = `${initialY + deltaY}px`;
        }
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
        element.style.cursor = 'grab';
    });
}


document.querySelector('.loom-click').addEventListener('click', () => {
    showAllImages();
});

function showAllImages() {
    const images = [
        '/assets/me1.jpg',
        '/assets/me2.jpg',
        '/assets/me3.jpg',
        '/assets/me4.jpg',
        '/assets/me5.jpg',
        '/assets/me1.jpg',
        '/assets/me2.jpg',
        '/assets/me3.jpg',
        '/assets/me4.jpg',
        '/assets/me5.jpg',
        '/assets/me1.jpg',
        '/assets/me2.jpg',
        '/assets/me3.jpg',
        '/assets/me4.jpg',
        '/assets/me5.jpg'
    ];

    images.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.classList.add('popup-image');

        img.style.position = 'absolute';
        img.style.left = `${Math.random() * window.innerWidth}px`;
        img.style.top = `${Math.random() * window.innerHeight}px`;

        img.style.width = '150px';
        img.style.height = 'auto';

        document.body.appendChild(img);

        makeImageDraggable(img);
        moveImageFluidly(img);
    });
}

function makeImageDraggable(image) {
    let isDragging = false;
    let dragStartX, dragStartY, initialX, initialY;

    image.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDragging = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        initialX = parseInt(window.getComputedStyle(image).left, 10);
        initialY = parseInt(window.getComputedStyle(image).top, 10);
        image.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
        if (isDragging) {
            e.preventDefault();
            const deltaX = e.clientX - dragStartX;
            const deltaY = e.clientY - dragStartY;
            image.style.left = `${initialX + deltaX}px`;
            image.style.top = `${initialY + deltaY}px`;
        }
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
        image.style.cursor = 'grab';
    });
}

function moveImageFluidly(image) {
    let speedX = Math.random() * 0.5 + 0.1;
    let speedY = Math.random() * 0.5 + 0.1;
    let directionX = Math.random() < 0.5 ? 1 : -1;
    let directionY = Math.random() < 0.5 ? 1 : -1;

    function move() {
        const rect = image.getBoundingClientRect();
        let newLeft = rect.left + speedX * directionX;
        let newTop = rect.top + speedY * directionY;

        if (newLeft <= 0 || newLeft + image.clientWidth >= window.innerWidth) {
            directionX *= -1;
        }
        if (newTop <= 0 || newTop + image.clientHeight >= window.innerHeight) {
            directionY *= -1;
        }

        image.style.left = `${newLeft}px`;
        image.style.top = `${newTop}px`;

        requestAnimationFrame(move);
    }

    requestAnimationFrame(move);
}
