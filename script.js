function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('main-content');
    sidebar.classList.toggle('open');
    if (sidebar.classList.contains('open')) {
        content.style.marginLeft = '250px';
    } else {
        content.style.marginLeft = '0';
    }
}

