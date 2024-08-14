const menuIcon = document.querySelector('#menu-icon')
const navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const form = document.querySelector('form');
const FullName = document.getElementById("Fullname")
const Email = document.getElementById("E-Mail")
const Subject = document.getElementById("Subject")
const Message = document.getElementById("Your Message")


function sendEmail() {
    const bodyMessage = 'FullName: ${fullName.value},<br>' Email: ${email.value}
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "61EA8ADB1BD5C6809E6F37B64CA34216027D",
        Password : "password",
        To : 'flashlytech@gmail.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})