const toggle = document.getElementById('darkModeToggle');
const body = document.body;

if (toggle) {
  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
  });
}

const modal = document.getElementById('modalSobre');
const btnSobre = document.querySelector('nav a[href="#sobre"]');
const closeBtn = document.getElementById('closeModal');

if (btnSobre && modal && closeBtn) {
  btnSobre.addEventListener('click', event => {
    event.preventDefault(); // impede o scroll normal
    modal.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  // Fechar modal clicando fora do conteúdo
  modal.addEventListener('click', event => {
    if (event.target === modal) {
      modal.classList.remove('show');
    }
  });
}

// Abrir o modal ao clicar no bloco "Sobre"
document.querySelector('.projeto h3:nth-child(1)').parentElement.addEventListener('click', function() {
    document.getElementById('modalSobre').classList.add('show');
    document.getElementById('modalSobre').setAttribute('aria-hidden', 'false');
});

// Fechar o modal ao clicar no botão de fechar
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modalSobre').classList.remove('show');
    document.getElementById('modalSobre').setAttribute('aria-hidden', 'true');
});

// Abrir o modal de Experiência
document.getElementById('abrirModalExperiencia').addEventListener('click', function() {
    const modal = document.getElementById('modalExperiencia');
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
});

// Fechar o modal de Experiência
document.getElementById('closeModalExperiencia').addEventListener('click', function() {
    const modal = document.getElementById('modalExperiencia');
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
});

// Fechar ao clicar fora do conteúdo
document.getElementById('modalExperiencia').addEventListener('click', function(event) {
    if (event.target === this) {
        this.classList.remove('show');
        this.setAttribute('aria-hidden', 'true');
    }
});

// Controle das experiências no modalExperiencia
const empresaButtons = document.querySelectorAll('.empresa-btn');
const descricaoItens = document.querySelectorAll('.descricao-item');

empresaButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active e aria-selected de todos os botões
    empresaButtons.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });

    // Esconde todas as descrições
    descricaoItens.forEach(desc => desc.style.display = 'none');

    // Ativa o botão clicado
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');

    // Mostra a descrição correspondente
    const empresaSelecionada = btn.getAttribute('data-empresa');
    const descricaoAtiva = document.querySelector(`.descricao-item[data-empresa="${empresaSelecionada}"]`);
    if (descricaoAtiva) descricaoAtiva.style.display = 'block';
  });
});








