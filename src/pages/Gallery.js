import foto_1 from "./../img/gallery/1-square-b03e1828f74f1344cf460c4d472768d5-5c064c5e26e89.jpg"
import foto_2 from "./../img/gallery/2-square-38cba5bde98aba4a5a2c1dc2b2286f1a-5c064c488fb85.jpg"
import foto_3 from "./../img/gallery/2.webp"
import foto_4 from "./../img/gallery/4-square-1dfed9223a75f8155bc2aaa9d9ed1340-5c064f94dcd8e.jpg"
import foto_5 from "./../img/gallery/5-square-0a0bce51e173d50225859887a6e81a9c-5c064f0c417d1.jpg"
import foto_6 from "./../img/gallery/7-square-6152344f7eee1dd748dec7d4ed8a0597-5c064f5c34f72.jpg"
import foto_7 from "./../img/gallery/photo_2025-05-22_15-55-59-kopiya-1.jpg"
import foto_8 from "./../img/gallery/888888.jpg"
import foto_9 from "./../img/gallery/54ef371e063969b786eeccd384cf056b-kopiya-3.jpg"
import foto_10 from "./../img/gallery/2149164293.jpg"

function Gallery(){
    return(
        <>
        <div className="gallery">
            <h1 className="title-1">Gallery</h1>
                <div class="gallery-grid">
                    <img src={foto_1} alt="img_1" />
                    <img src={foto_2} alt="img_2" />
                    <img src={foto_3} alt="img_3"/>
                    <img src={foto_4} alt="img_4"/>
                    <img src={foto_5} alt="img_5"/>
                    <img src={foto_6} alt="img_6"/>
                    <img src={foto_7} alt="img_7"/>
                    <img src={foto_8} alt="img_8"/>
                    <img src={foto_9} alt="img_9"/>
                    <img src={foto_10} alt="img_10 "/>
                </div>
        </div>
        
        </>
    )
}

export default Gallery;