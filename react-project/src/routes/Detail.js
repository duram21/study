import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Movie from "../components/Movie";
import Button from "../Button";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Detail(){
    const {id} = useParams();
    const [flag, setFlag] = useState(0)
    const [movie, setMovie] = useState({});
    const getMovie = async() =>{
        const json = await (await fetch (`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json.data.movie);
        setMovie(json.data.movie);
        setFlag(1);
    }
    useEffect(() => {
       getMovie();
    }, [])
    return (
        <div>{flag === 1 ?            
             <Movie
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.rating}
            genres={movie.genres}
        /> : null}
        {flag === 1 ? <Link to={`/`}><Button text="HOME"/></Link> : null}
        </div>
    )
}

export default Detail;