document.addEventListener('DOMContentLoaded', () => {
    // 1. '자세히 보기' 버튼 요소 선택
    const diggingButtons = document.querySelectorAll('.digging');
    // 2. 닫기 버튼 요소 선택
    const closeButtons = document.querySelectorAll('.close_btn');
    // 3. 모달 팝업 요소 선택 (배경 포함)
    const modalWraps = document.querySelectorAll('.modal_wrap');

    // '자세히 보기' 버튼 클릭 이벤트 리스너 등록
    diggingButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // 버튼의 'data-modal' 속성 값 (예: "01")을 가져옵니다.
            const modalId = button.getAttribute('data-modal');
            // 해당 ID를 가진 모달 요소를 선택합니다.
            const targetModal = document.getElementById(`modal${modalId}`);

            if (targetModal) {
                // 'active' 클래스를 추가하여 CSS의 display: flex;를 적용해 모달을 엽니다.
                targetModal.classList.add('active');
                // 모달이 열릴 때 스크롤 방지 (선택 사항)
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // 닫기 버튼 클릭 이벤트 리스너 등록
    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // 가장 가까운 .modal_wrap 부모 요소를 찾습니다.
            const modalWrap = button.closest('.modal_wrap');
            if (modalWrap) {
                // 'active' 클래스를 제거하여 모달을 닫습니다.
                modalWrap.classList.remove('active');
                // 스크롤 허용
                document.body.style.overflow = '';
            }
        });
    });

    // 모달 배경 클릭 이벤트 리스너 등록 (팝업 본체 제외)
    modalWraps.forEach(modal => {
        modal.addEventListener('click', (e) => {
            // 클릭된 요소가 .modal_wrap 자신일 경우에만 닫습니다.
            if (e.target.classList.contains('modal_wrap')) {
                modal.classList.remove('active');
                // 스크롤 허용
                document.body.style.overflow = '';
            }
        });
    });
});