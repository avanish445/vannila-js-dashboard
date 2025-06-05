
const menuHandler = () => {
    let isMenu = false
    const menu = document.querySelector('.menu')
    menu.addEventListener('click', function () {
        console.log('clicked');
        isMenu = !isMenu
        menu.textContent = menu.textContent == '✕' ? '☰' : '✕'
        const menuBar = document.getElementById('menu-bar')
        if (isMenu) {
            menuBar.style.right = '0px'
        } else {
            menuBar.style.right = '-300px'
        }
    })
}
const handleMainPageNavigation = () => {
    const heading = document.getElementById('myPage')
    if (heading) {
        menuHandler()
        heading.addEventListener('click', function () {
            document.location.href = '/'
        })
    } else {
        console.log('Element not found')
    }
}
function pageMapper(id, file) {
    fetch(file)
        .then((res) => res.text())
        .then((html) => {
            // console.log(html)
            if (document.getElementById(id)) {
                document.getElementById(id).innerHTML = html
                if (id === 'header') {
                    handleMainPageNavigation()
                }
            }

        }).catch(err => {
            console.log('error', err)
        });
}
pageMapper('header', 'header.html')
pageMapper('main', 'main.html')
pageMapper('footer', 'footer.html')
pageMapper('menu-bar', 'menu.html')


