import New from "../components/news/New"

import {news2} from "./../helpers/projectsList"

function News(){
    return(
        <main className="section">
            <div className="container_new">
                <h2 className="title-1">News</h2>
                <ul className="news">

                    {news2.map((news, index) => {
                        return <New 
                                key={index}
                                title={news.title} 
                                description={news.description} 
                                image={news.image}
                                data={news.data}
                                />
                        
                    })}

                </ul>
            </div>
        </main>
    )
}

export default News