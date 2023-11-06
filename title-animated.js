const title = document.getElementById('animated-title');
const titleText = title.textContent;
const titleArray = titleText.split('');
const animatedTitle = titleArray.map(letter => {
    return `<span>${letter}</span>`;
});
title.innerHTML = animatedTitle.join('');
