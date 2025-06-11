import React, { useEffect, useRef } from 'react';
import $ from 'jquery';

function PoltavaMap() {
    const mapContainerRef = useRef(null); // Створюємо ref для контейнера карти

    const latitude = 49.5882;
    const longitude = 34.5515;

    useEffect(() => {
        if (mapContainerRef.current) {
            // Очищаємо контейнер перед додаванням нової карти, якщо потрібно
            $(mapContainerRef.current).empty();

            const googleMapsUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

            const $mapIframe = $('<iframe>')
                .attr('width', '100%')
                .attr('height', '300px')
                .attr('frameborder', '0')
                .attr('style', 'border:0')
                .attr('src', googleMapsUrl)
                .attr('allowfullscreen', '')
                .attr('aria-hidden', 'false')
                .attr('tabindex', '0')
                .addClass('ln-libraryMap'); // Використовуємо той самий клас, що й у першому прикладі

            // Додаємо iframe до DOM-елемента, на який посилається mapContainerRef
            $(mapContainerRef.current).append($mapIframe);
        }
    }, [latitude, longitude]); // Залежності: перевиконувати useEffect, якщо змінюються широта/довгота

    return (
        <div ref={mapContainerRef} className="poltava-map-container">
            {/* Тут буде вбудована карта */}
        </div>
    );
}

export default PoltavaMap;