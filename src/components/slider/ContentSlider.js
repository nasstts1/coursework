import img_1 from "../../img/news/new_1.webp"
import img_3 from "../../img/news/new_3.webp"
import img_4 from "../../img/news/new_4.webp"
import img_5 from "../../img/news/new_5.webp"
import img_7 from "../../img/news/new_7.webp"

import "./slider.css";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, A11y } from 'swiper/modules';

function ContentSlider(){
    const slideData = [
        {
            id: 1,
            image: img_1,
            title: 'Будова зуба',
            description: 'Зуби виконують кілька функцій. Вони не тільки відповідають за пережовування їжі, але й беруть участь у мовленні, інших процесах, впливають на форму обличчя. Вважається, що складна будова зуба сформувалася в ході еволюції, і людині важливо знати про всі особливості, щоб забезпечити правильний догляд за ротовою порожниною.',
            date: '18 червня 2025',
        },
        {
            id: 2,
            image: img_3,
            title: 'Як користуватися електричною зубною щіткою',
            description: 'Дотримуючись правильної техніки використання електричної зубної щітки та рекомендацій щодо чищення двічі на день, ви можете зберегти перлинно-білі зуби, свіжий подих і допомогти запобігти карієсу або іншим інфекціям. Електричні зубні щітки можуть бути кращими за ручні, але тільки за умови правильного використання.',
            date: '15 липня 2025',
        },
        {
            id: 3,
            image: img_4,
            title: 'Що таке бруксизм: причини, ознаки та лікування',
            description: 'Бруксизм – це стоматологічне захворювання, що характеризується несвідомим актом скреготіння або стискання зубів.Бруксизм поділяють на два основні типи:бруксизм неспання (виникає у пацієнтів під час неспання) та бруксизм сну (виникає під час сну).',
            date: '25 червня 2025',
        },
        {
            id: 4,
            image: img_5,
            title: 'Пародонтит: ознаки, лікування та профілактика',
            description: 'Пародонтит, або альвеолярна піорея, являє собою запалення ясен (гінгівіт) з подальшим ураженням опорних структур зуба. За пародонтиту процес починається з ясен, потім інфекція вражає пародонтальну кишеню і зубний цемент, надалі поширюючись на кісткову тканину альвеолярного відростка.',
            date: '22 липня 2025',
        },
        {
            id: 5,
            image: img_7,
            title: 'Які бувають види коронок на зуби?',
            description: 'У стоматології сьогодні застосовуються зубні коронки, які відрізняються матеріалом, конструктивними та іншими особливостями. Необізнаному пацієнтові часом складно зробити вибір серед різноманітних варіантів. Тому важливо дізнатися про особливості різних видів коронок для зубів, їх плюси та мінуси, щоб не помилитися з вибором.',
            date: '10 липня 2025',
        },
        
    ];

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30} 
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <div className="slide-image-container">
                <img src={slide.image} alt={slide.title} />
              </div>
              <div className="slide-text-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <span className="slide-date">{slide.date}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ContentSlider;