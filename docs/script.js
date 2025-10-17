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