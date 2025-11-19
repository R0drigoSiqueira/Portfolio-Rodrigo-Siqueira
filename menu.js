document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu');
    const btnClose = document.getElementById('btn-close');
    const menu = document.getElementById('menu-mobile');
    const btn = document.getElementById("btnCertificadosMobile");
    const modal = document.getElementById("modalCertificados");
    const fechar = document.getElementById("fecharModal");

    btnMenu.addEventListener('click', () => {
        menu.classList.add('menu-open');
    });

    menu.addEventListener('click', () => {
        menu.classList.remove('menu-open');
    });

    btnClose.addEventListener('click', () => {
        menu.classList.remove('menu-open');
    });

    btn.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

    fechar.addEventListener('click', () => {
            modal.style.display = 'none';
        });

    window.addEventListener('click', (e) => {
            if(e.target == modal) {
                modal.style.display = 'none';
            }
        });
    });