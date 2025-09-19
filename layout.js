
function createHeader(pageTitle) {
    const headerContainer = document.getElementById('main-header');
    if (!headerContainer) return;
    headerContainer.innerHTML = `
        <header class="text-center mb-4">
            <h1 class="text-4xl md:text-5xl font-bold text-teal-800 dark:text-teal-400">อัลกุรอ่านของฉัน</h1>
            <p class="text-xl text-gray-600 dark:text-gray-400 mt-2">Quran Wetsiri</p>
        </header>
    `;
}

function createNavbar(activePage) {
    const navbarContainer = document.getElementById('navbar-container');
    if (!navbarContainer) return;

    const pages = [
        { name: 'อัลกุรอาน', href: 'index.html' },
        { name: 'เวลาละหมาด', href: 'praytime.html' },
        { name: 'พยากรณ์อากาศ', href: 'weather.html' },
        { name: 'คุณพ่อคุณแม่', href: 'parents.html' },
        { name: 'วิธีใช้', href: 'howto.html' }
    ];

    const linksHTML = pages.map(page => {
        const isActive = activePage === page.href;
        return `<a href="${page.href}" class="px-3 md:px-4 py-2 rounded-lg text-sm md:text-base font-semibold transition-colors ${isActive ? 'bg-teal-600 text-white shadow-md' : 'text-gray-600 hover:bg-teal-100 dark:text-gray-300 dark:hover:bg-gray-700'}">${page.name}</a>`;
    }).join('');

    navbarContainer.innerHTML = `
        <nav class="bg-white dark:bg-gray-800 p-2 rounded-xl shadow-lg mb-8 flex flex-wrap justify-center items-center gap-1 md:gap-2 sticky top-4 z-20">
            ${linksHTML}
            <button id="theme-toggle-btn" class="ml-2 md:ml-4 p-2 text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 rounded-full">
                <svg id="theme-toggle-dark-icon" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                <svg id="theme-toggle-light-icon" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 5.05a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zm-.707 10.607a1 1 0 011.414 0l.707-.707a1 1 0 111.414 1.414l-.707.707a1 1 0 01-1.414 0zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </button>
        </nav>
    `;
}

function createFooter() {
    const footerContainer = document.getElementById('main-footer');
    if (!footerContainer) return;
    footerContainer.innerHTML = `
        <footer class="text-center mt-12 py-4 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
            <p>จัดทำโดยเภสัชกรวิรุณ เวชศิริ</p>
        </footer>
    `;
}

function initializeTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    if (!themeToggleBtn || !themeToggleDarkIcon || !themeToggleLightIcon) return;

    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        themeToggleDarkIcon.classList.remove('hidden');
    }

    themeToggleBtn.addEventListener('click', () => {
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');
        let theme = 'light';
        if (document.documentElement.classList.toggle('dark')) {
            theme = 'dark';
        }
        localStorage.setItem('color-theme', theme);
    });
}

function applyLayout(pageTitle, activePage) {
    createHeader(pageTitle);
    createNavbar(activePage);
    createFooter();
    initializeTheme();
}
