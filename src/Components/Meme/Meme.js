import { Link } from "react-router-dom";
import styled from "styled-components";

const MemeStyle = styled.div`
#meme-details {
    margin: 0;
}
#meme-details h1 {
    margin-bottom: .5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
}

.meme-details {
    width: 100%;
    padding-left: 15px;
    display: flex;
    margin-right: -15px;
    margin-left: -15px;
    margin-top:50px;
}

.meme-details h1 {
    display: block;
}

.meme-img {
    max-width: 50%;
    text-align: center;
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}
.meme-img img {
    padding: .25rem;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: .25rem;
    max-width: 60%;
    height: auto;
}

.meme-description {
    max-width: 35%;
    flex: 0 0 35.333333%;
    position: relative;
    text-align: center;
}

.meme-description h2 {
    margin-bottom: 1rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
    margin-top: 1rem;
    font-size: 1.75rem;
}
.meme-description  p {
    margin-bottom: 50px;
    text-align: justify;
    box-shadow: 2px 5px 13px 0px #000000, 8px -15px 31px -12px rgb(0 0 0 / 0%);
    padding:20px;
}
.warning {
    margin-right: 20px;
}

.danger:hover {
    color: #212529;
    background-color: #dc3545;
    border-color: #dc3545;
} 
.warning:hover {
    color: #212529;
    background-color: #ffc107;
    border-color: #ffc107;
}
`;

const Meme = ({
    _id,
    title,
    imageUrl
}) => {
    return (
        <MemeStyle>
        <div className="meme">
            <div className="card">
                <div className="info">
                    <p className="meme-title">{title}</p>
                    <img className="meme-image" alt="meme-img" src={imageUrl}/>
                </div>
                <div id="data-buttons">
                        <Link className="button" to={`details/${_id}`}>Details</Link>
                </div>
            </div>
        </div>
        </MemeStyle>
    );
}
export default Meme;