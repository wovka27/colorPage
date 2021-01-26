const menu      = document.querySelector('.header__menu'),
    burger      = document.querySelector('.header__burger'),
    menuItems   = document.querySelectorAll('.header__link'),
    posX = 0,
    posY = 0;

    burger.addEventListener('click', e => {
        menu.classList.toggle('active');
        e.currentTarget.classList.toggle('active');
    })

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                burger.classList.remove('active');
            }
        })
    })


;
let scroll = document.querySelectorAll('header [id*="#"]');

for (scl of scroll) {
    if (scl) {
        scl.addEventListener('click', e => {
            e.preventDefault();
            sclId = e.currentTarget.getAttribute('id');
            document.querySelector(sclId).scrollIntoView({behavior: 'smooth', block: 'start'})
        })
    }
};

menuItems.forEach(el => {
    el.addEventListener('click', e => {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            burger.classList.remove('active');
        }
    })
})


;
const animItems = document.querySelectorAll('.-anim');
if (animItems.length>0) {
    window.addEventListener('scroll', animScroll);
    function animScroll() {
        for (item of animItems) {
            const itemHeight = item.offsetHeight,
                itemOffset = offset(item).top,
                animStart = 4;
            let itemPoint = window.innerHeight - itemHeight / animStart;
            if (itemHeight> window.innerHeight) {itemPoint = window.innerHeight - window.innerHeight / animStart;}
            if((pageYOffset> itemOffset - itemPoint) && pageYOffset<(itemOffset + itemHeight)) {item.classList.add('anim');}
            else {item.classList.remove('anim');}
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            sclLeft = window.pageXOffset||document.documentElement.scrollLeft,
            sclTop = pageYOffset||document.documentElement.scrollTop;
            return {top: rect.top + sclTop, left: rect.left + sclLeft}
    }
}
setTimeout(() => {
    document.querySelector('.header-content').classList.add('anim');
}, 300);





;

let btn = document.querySelectorAll('[id^="btn"]');

[].forEach.call(btn, el => {
    el.addEventListener('click',() => {
        let product = document.querySelector('.portfolio-content__products');
        for (let item of btn) {item.classList.remove('active')}
        document.getElementById(el.id).classList.add('active');
        product.classList.toggle('anim');
        
    })
});
