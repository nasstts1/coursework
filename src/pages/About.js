import img_1 from "./../img/gallery/1-square-b03e1828f74f1344cf460c4d472768d5-5c064c5e26e89.jpg"
import service_1 from "./../img/about_service/TeaserIcon-Preventative.webp"
import service_2 from "./../img/about_service/TeaserIcon-Periontodology.webp"
import service_3 from "./../img/about_service/TeaserIcon-Othrodontic.webp"
import service_4 from "./../img/about_service/TeaserIcon-Restorative.webp"

function News(){
    return(
        <main className="section">
            
            <div className="about_page">
                <div className="about_right_side">
                    <h1 className="title-1">Про сайт</h1>
                    <p>У нашій стоматології виконуються різні види профілактики і лікування захворювань ротової порожнини, протезування та імплантації зубів, ортодонтичне лікування, ведеться дитячий прийом.
                        Проводиться багаторівнева якісна обробка і підготовка з дезінфекцією і фінальною стерилізацією в електронному автоклаві, після чого інструменти пакуються індивідуально в спеціальні термопакети. Ви можете бути впевнені в стерильності, безпеці та ідеальній чистоті.
                        Досвідчені фахівці медичного центру "Стоматологія на Русанівці" кваліфіковано за допомогою інноваційного діагностичного та лікувального обладнання, найсучасніших стоматологічних технологій і матеріалів зможуть провести огляд і консультацію, виконати процедури і втручання різного рівня складності і вирішити будь-яку проблему з зубами пацієнта.
                    </p>
                </div>
                <div className="about_left_side">
                    <img src={img_1} alt="" className="new__img"/>
                </div>
            </div>

            <div className="our_services">
                <ul className="our_services_list">
                    <li className="our_services_list-item item_1">
                        <img src={service_1} alt="TeaserIcon-Preventative"/>
                        <h3>Терапевтична Стоматологія</h3>
                        <p>Здорові зуби - це необхідність</p>
                    </li>
                    
                    <li className="our_services_list-item item_3">
                        <img src={service_3} alt="TeaserIcon-Othrodontic"/>
                        <h3>Протезування</h3>
                        <p>Протезування нового покоління</p>
                    </li>
                    <li className="our_services_list-item item_2">
                        <img src={service_2} alt="TeaserIcon-Periontodology"/>
                        <h3>Естетична Стоматологія</h3>
                        <p>У нашій клініці створюють естетику</p>
                    </li>
                    <li className="our_services_list-item item_4">
                        <img src={service_4} alt="TeaserIcon-Restorative"/>
                        <h3>Імплантація</h3>
                        <p>Установлюємо імпланти з гарантією</p>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default News