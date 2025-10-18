  document.querySelectorAll('.digging').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.dataset.modal;
      document.getElementById(`modal${modalId}`).style.display = 'flex';
    });
  }); 

  document.querySelectorAll('.close_btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.target.closest('.modal_wrap').style.display = 'none';
  });
});



// 메인 메뉴 반전 효과 
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header-wrap');
  const headerH = header ? header.offsetHeight : 0;
  document.documentElement.style.setProperty('--header-h', headerH + 'px');

  const links = Array.from(document.querySelectorAll('.menu a[href^="#"]'));
  const sections = links
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  // 스크롤 시 섹션에 진입하면 해당 링크 활성화
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = document.querySelector(`.menu li a[href="#${id}"]`);
      if (entry.isIntersecting && link) {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, {
    // 헤더 높이만큼 위쪽 여백 보정 + 화면의 위 30% 지점을 기준으로 하이라이트
    rootMargin: `-${headerH + 10}px 0px -70% 0px`,
    threshold: 0  
  });

  sections.forEach(s => io.observe(s));

  // 클릭 시 스무스 스크롤 + 즉시 하이라이트
  links.forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - (headerH + 10),
        behavior: 'smooth'
      });
      links.forEach(l => l.classList.remove('active'));
      a.classList.add('active');
    });
  });
});
