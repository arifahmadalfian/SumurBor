const navbar = document.getElementsByClassName('mynav')[0];
const navlink = document.getElementsByClassName('nav-link');
const socialnav = document.getElementsByClassName('social-nav')[0];
const ion = document.querySelector('.social-nav ion-icon');
window.addEventListener('scroll', function() {
    let tinggi = window.pageYOffset
    if (tinggi <= 0 ) {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = '0px 4px 24px rgba(105, 105, 105, 0)';
        socialnav.style.color = '#fff';
        ion.style.color ="#fff";
        Array.from(navlink).forEach(function(e) {
            if ( screen.width < 992 ) {
                e.style.color ='#000';
            } else {
                e.style.color ="#fff";
            }
        });
    } else if (tinggi = 1) {
        navbar.style.background = '#fff';
        navbar.style.boxShadow = '0px 4px 24px rgba(105, 105, 105, 0.1)';
        socialnav.style.color = '#000';
        ion.style.color ="#000";
        Array.from(navlink).forEach(function(e) {
            e.style.color ="#000";
        });
    }
});


function whatsapp() {
    window.location.href ="https://api.whatsapp.com/send?phone=6285722234393&text=Hallo%20Saya%20tertarik%20dengan%20jasa%20dan%20produk%20anda%2C%20saya%20ingin%20order%20sesuatu";
}

function email() {
    window.location.href = "mailto:faizmarchendise@gmail.com"
}