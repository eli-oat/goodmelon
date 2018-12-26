function peekaboo(targetDiv, triggerElement) {
    const ele = document.getElementById(targetDiv);
    const text = document.getElementById(triggerElement);
    if (ele.style.display === 'block') {
        ele.style.display = 'none';
        document.getElementById('pageTitle').style.display = 'block';
        text.innerHTML = 'Menu';
    } else {
        ele.style.display = 'block';
        document.getElementById('pageTitle').style.display = 'none';
        text.innerHTML = 'Close';
    }
}
