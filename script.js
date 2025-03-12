document.addEventListener("DOMContentLoaded", function () {
    // 크루원 정보 모달
    const crewModal = document.getElementById("crewModal");
    const openCrewModal = document.getElementById("openCrewModal");
    const closeCrew = document.querySelector(".closeCrew");

    if (openCrewModal && crewModal && closeCrew) {
        openCrewModal.addEventListener("click", function (event) {
            event.preventDefault();
            crewModal.style.display = "block";
        });

        closeCrew.addEventListener("click", function () {
            crewModal.style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target === crewModal) {
                crewModal.style.display = "none";
            }
        });
    }

    // 관리자 연락처 모달
    const adminModal = document.getElementById("adminModal");
    const openAdminModal = document.getElementById("openAdminModal");
    const closeAdmin = document.querySelector(".closeAdmin");

    if (openAdminModal && adminModal && closeAdmin) {
        openAdminModal.addEventListener("click", function (event) {
            event.preventDefault();  // 기본 동작 방지
            adminModal.style.display = "block";  // 관리자 모달 열기
        });

        closeAdmin.addEventListener("click", function () {
            adminModal.style.display = "none";  // 관리자 모달 닫기
        });

        window.addEventListener("click", function (event) {
            if (event.target === adminModal) {
                adminModal.style.display = "none";  // 관리자 모달 바깥 클릭 시 닫기
            }
        });
    }
});
