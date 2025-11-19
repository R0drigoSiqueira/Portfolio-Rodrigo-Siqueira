const btn = document.getElementById("btnCertificados");
const modal = document.getElementById("modalCertificados");
const fechar = document.getElementById("fecharModal");

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