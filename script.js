$(document).ready(function () {

    $("#hamburger").click(function () {
        $("#navMenu").toggleClass("active");
    });

    // Close menu when clicking any link
    $("#navMenu a").click(function () {
        $("#navMenu").removeClass("active");
    });
    $(".demo").click(function (e) {
        e.preventDefault();
        $("#demoPopup").addClass("active");
    });

    // Close popup
    $(".close-btn").click(function () {
        $("#demoPopup").removeClass("active");
    });

    // Submit form
    $("#demoForm").submit(function (e) {
        e.preventDefault();

        // $("#demoForm").hide();
        $(this).find(".success-msg").fadeIn();;
        this.reset(); // ✅ reset form
        setTimeout(() => {
            $(this).find(".success-msg").css('display', 'none');
        }, 2000);
    });

    $("#contactForm").submit(function (e) {
        e.preventDefault();
        let phone = $("#contactPhone").val().replace(/[^0-9]/g, "").slice(0, 10);;

        if (phone.length !== 10) {
            $(".error-msg").fadeIn();
            return;
        } else {
            $(".error-msg").hide();
        }
        // $("#contactForm").hide();
        $(this).find(".success-msg").fadeIn();
        this.reset(); // ✅ reset form
        setTimeout(() => {
            $(this).find(".success-msg").css('display', 'none');
        }, 2000);
    });
    $(".toggle-btn").click(function () {
        let form = $(this).data("form");

        $(".toggle-btn").removeClass("active");
        $(this).addClass("active");

        $(".auth-form").removeClass("active");
        $("#" + form + "Form").addClass("active");
    });

    // Signup Validation
    $("#signupForm").submit(function (e) {
        e.preventDefault();

        let phone = $("#signupPhone").val().replace(/[^0-9]/g, "").slice(0, 10);

        if (phone.length !== 10) {
            alert("Enter valid 10-digit phone number");
            return;
        }

        // $(".auth-form").hide();
        $(this).find(".success-msg").fadeIn();
        this.reset(); // ✅ reset 
        setTimeout(() => {
            $(this).find(".success-msg").css('display', 'none');
        }, 2000);
    });

    // Login Submit
    $("#loginForm").submit(function (e) {
        e.preventDefault();

        let email = $("#loginEmail").val();
        let password = $("#loginPassword").val();

        // Dummy credentials (you can change)
        let validEmail = "admin@gmail.com";
        let validPassword = "123456";

        if (email === validEmail && password === validPassword) {
            $(".error-msg").hide();
            $(".login-success").fadeIn();
            this.reset(); // ✅ reset form
        } else {
            $(".error-msg").fadeIn();
            $(".auth-box").addClass("shake");
            setTimeout(() => $(".auth-box").removeClass("shake"), 300);
            this.reset(); // ✅ reset form
        }
        setTimeout(() => {
            $(this).find(".error-msg").css('display', 'none');
        }, 2000);

    });
    $("a[href^='#']").click(function (e) {
        e.preventDefault();

        let target = $($(this).attr("href"));

        $("html, body").animate({
            scrollTop: target.offset().top - 80 // adjust header height
        }, 600);
    });

});
var swiper = new Swiper(".showcaseSlider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,

    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 120,
        modifier: 1,
        slideShadows: false,
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
document.querySelectorAll(".toggle-password").forEach(icon => {
    icon.addEventListener("click", function () {
        const input = this.parentElement.querySelector("input");

        const type = input.type === "password" ? "text" : "password";
        input.type = type;

        this.classList.toggle("fa-eye");
        this.classList.toggle("fa-eye-slash");
    });
});