const menuBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const brand = document.getElementById("brand").value;
    const message = document.getElementById("message").value;

    // الخدمات المختارة
    const services = [];
    document.querySelectorAll('input[name="platform"]:checked').forEach(item => {
        services.push(item.nextElementSibling.textContent);
    });

    // حجم المشروع
    const projectSize =
        document.querySelector('input[name="content-type"]:checked')?.nextElementSibling.textContent || "غير محدد";

    const text =
`السلام عليكم، أريد طلب تصميم.

👤 الاسم: ${name}
📧 الإيميل: ${email}
🏢 اسم البراند: ${brand}

🎨 الخدمة:
${services.join(" - ")}

📦 حجم المشروع:
${projectSize}

📝 تفاصيل المشروع:
${message}`;

    const url = `https://wa.me/201016659333?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
});

document.querySelectorAll(".package-btn").forEach(button => {

    button.addEventListener("click", function () {

        const packageName = this.dataset.package;

        const message =
`السلام عليكم،

أرغب في الاشتراك في:

⭐ ${packageName}

وأرغب في معرفة خطوات البدء.

شكراً لكم 🌹`;

        window.open(
            `https://wa.me/201016659333?text=${encodeURIComponent(message)}`,
            "_blank"
        );

    });

});
const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("click",()=>{

        modalImg.src = card.querySelector("img").src;

        modalTitle.textContent =
        card.querySelector(".project-label").textContent;

        modalDescription.textContent =
        card.querySelector(".project-description").textContent;

        modal.classList.add("active");

    });

});

document.querySelector(".close-modal").onclick=()=>{
    modal.classList.remove("active");
};

modal.onclick=(e)=>{
    if(e.target===modal){
        modal.classList.remove("active");
    }
};

const toggleBtn = document.getElementById("toggleProjects");
const projectGrid = document.querySelector(".project-grid");

toggleBtn.addEventListener("click", () => {

    projectGrid.classList.toggle("hide-projects");

    if(projectGrid.classList.contains("hide-projects")){
        toggleBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
    }else{
        toggleBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    }

});
