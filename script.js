document.getElementById('submitSection').addEventListener('click', function () {
    // console.log('clicked!!!!');
    const emailSection = document.getElementById('emailSection');
    const userEmail = emailSection.value;
    const passwordSection = document.getElementById('passwordSection');
    const userPasssword = passwordSection.value;
    if (userEmail == 'bot@gmail.com' && userPasssword == 'bot123') {
        window.location.href = 'bank.html';
    }
});

