
    (() => {
        const toggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('.nav-container nav');
        if (!toggle || !nav) return;

        const closeMenu = () => {
            nav.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
        };

        toggle.addEventListener('click', () => {
            const open = nav.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', String(open));
        });

        nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) closeMenu();
        });
    })();
