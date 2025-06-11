import Map from "./../components/map/Map"

function Contact(){
    return(
        <>
        <main class="section">
            <div class="container">
                    <h1 class="title-1">Контакти</h1>

                    <ul class="content-list">
                        <li class="content-list__item">
                            <h2 class="title-2">Телефон</h2>
                            <p><a href="tel:+380686413730">+380686413730</a></p>
                        </li>
                        <li class="content-list__item">
                            <h2 class="title-2">Пошта</h2>
                            <p><a href="mailto:anastasiya.kolomiets2005@gmail.com">anastasiya.kolomiets2005@gmail.com</a></p>
                        </li>
                        <li class="content-list__item">
                            <section className="full-width-section">
                                <Map />
                            </section>
                        </li>
                    </ul>
            </div>
        </main>
        </> 
         
    )
} 

export default Contact