var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
  });

//   slidesPerView: 1:

// Descrição: Define o número de slides visíveis por vez.
// Valor: 1 (Apenas um slide será exibido por vez).
// spaceBetween: 30:

// Descrição: Define o espaço em pixels entre os slides.
// Valor: 30 pixels.
// loop: true:

// Descrição: Ativa a navegação em loop, permitindo que os slides continuem do último ao primeiro sem interrupção.
// Valor: true (ativa o loop).
// pagination:

// Descrição: Configura a paginação do carrossel.
// Sub-opções:
// el: ".swiper-pagination": Seleciona o elemento que será usado para a paginação (um seletor CSS para o elemento de paginação).
// clickable: true: Torna a paginação clicável, permitindo que os usuários naveguem para slides específicos ao clicar nos indicadores de paginação.
// navigation:

// Descrição: Configura os botões de navegação do carrossel.
// Sub-opções:
// nextEl: ".swiper-button-next": Seleciona o elemento que será usado para avançar para o próximo slide (um seletor CSS para o botão "próximo").
// prevEl: ".swiper-button-prev": Seleciona o elemento que será usado para voltar ao slide anterior (um seletor CSS para o botão "anterior").
// autoplay:

// Descrição: Configura a reprodução automática dos slides.
// Sub-opções:
// delay: 9000: Define o tempo de atraso entre as transições automáticas dos slides em milissegundos (9000 ms = 9 segundos).
// disableOnInteraction: false: Define se a reprodução automática deve ser desativada quando o usuário interage com o carrossel (clicando ou deslizando). false significa que a reprodução automática continua mesmo após a interação do usuário.
