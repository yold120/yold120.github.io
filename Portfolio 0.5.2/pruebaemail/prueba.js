
const btn = document.querySelector('button')
const inputs = document.querySelector('form')

btn.addEventListener('click', () => {
    Email.send({
        SecureToken : "356401ec-1bb4-42f1-8263-14aebaf35c5a",
        /*
        356401ec-1bb4-42f1-8263-14aebaf35c5a
        Host:"smtp.mailtrap.io",
        Username:"b7a4d81d659c8c",
        Password:"25237bfadbf888",
        Host:"smtp.gmail.com",
        Username:"yctegnology@gmail.com",
        Password:"Yoldany2000",
        */
        To: "yctegnology@hotmail.com",
        From: document.getElementById('email').value,
        Subject: "Contac Us Query By the Customer",
        Body: document.getElementById('message').value + "<br>" + document.getElementById('name').value + "<br>" + document.getElementById('phone').value
    }).then(msg => alert("The email successfully sent"))
})