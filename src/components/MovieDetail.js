import propTypes from "prop-types";

function MovieDetail(
    {   title,
        largeCoverImg, 
        year, 
        runtime, 
        rating,
        like_count,
        download_count
    }) {
    return (
        <div>
            <h1>세부 정보</h1>
            <img src={largeCoverImg} alt={title} />
            <h2>제목 : {title}</h2>
            <p>{year}년 개봉</p>
            <p>상영시간 : {runtime}분</p>
            <p>평점 : {rating}</p>
            <p>💓 : {like_count}</p>
            <p>다운로드 : {download_count}</p>
        </div>
        
    )
}

MovieDetail.propTypes = {
    title : propTypes.string.isRequired,
    largeCoverImg : propTypes.string.isRequired,
    year : propTypes.number.isRequired,
    runtime : propTypes.number.isRequired,
    rating : propTypes.number.isRequired,
    like_count : propTypes.number.isRequired,
    download_count : propTypes.number.isRequired,
}

export default MovieDetail;

