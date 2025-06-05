const contentSection = document.getElementById('content-section')
const contentMap = {
    about: `<h1>About</h1>
        <p>Jaspeccio's Italian Bistro has been around since 1937. Originally located in Boston, MA, the restaurant has expanded to Minneapolis, MN, and St. Louis, Missouri</p>
        <p>The owner, Jaspeccio, comes from a long lineage of humble Italian cooks, Belferino his father</p>`,
    menu: `<h1>Lunch/Dinner Menu</h1>
        <div>
            <h3>Spaghetti:</h3>
            <p>$18.99 - Tomato and meat sauce over al dente noodles</p>
        </div>
        <div>
            <h3>Cheeseburger:</h3>
            <p>$14.99 - Served with fries and american cheese</p>
        </div>
        <div>
            <h3>Mac & Cheese:</h3>
            <p>$15.99 - Kraft, boxed mac & cheese</p>
        </div>
        <div>
            <h3>Alfredo:</h3>
            <p>$19.99 - Signature dish, served with broccoli and your choice of protein</p>
        </div>`,
    contact: `<h1>Contact</h1>
        <p>Send us an email: Jaspecci@gmail.com</p>
        <p>We look forward to hearing from you!</p>`
}
const navBtns = document.querySelectorAll('.nav-btn')
contentSection.innerHTML = contentMap.about
navBtns[0].classList.add('active')

navBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const btnName = event.target.dataset.page
        contentSection.innerHTML = contentMap[btnName]
        navBtns.forEach(btn => btn.classList.remove('active'))
        btn.classList.add('active')
    })
})
