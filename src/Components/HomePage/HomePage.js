import { Component } from 'react';
import styled from 'styled-components'
import * as memeService from '../../services/memeService'
import Meme from '../Meme/Meme';

const StyledHomePage = styled.section`
#meme-feed>h1 {
    display: block;
    border-bottom: 3px solid lightgrey;
    margin: auto;
    margin-bottom: 34px;
    padding: 23px;
    width: 60%;
    font-weight: bold;
    font-size: 50px;
    text-decoration: none;
    color: black;
}

#memes {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    text-align: center;
    justify-content: space-around;

}

#memes .meme {
    flex: 0 0 25%;
    max-width: 50%;
    position: relative;
    padding: 15px;
    margin-bottom: 30px;
    border-radius: 2%;
}

.card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
}
.card img {
    flex-shrink: 0;
    width: 250px;
    height: 250px;
}

.meme-title {
    padding: 10px;
}

h2.meme-title:hover {
    color: #4438ea;
    cursor: pointer;
}

.meme-image {
    width: 250px;
    height: auto;
}

.no-memes {
    font-weight: bold;
    font-size: 4em;
}

#data-buttons {
    padding: 0.75rem 1.25rem;
    background-color: rgba(0, 0, 0, 0.03);
    border-top: 1px solid rgba(0, 0, 0, 0.125);
}

.custom-button {
    background-color: blue;
    border: none;
    color: white;
    padding: 10px;
    width: 100px;
    margin: 2px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

.creator {
    margin-left: 12em;
    cursor: pointer;
    background-color: blue;
    color: white;
    padding: 11px 8px 11px 8px;
}

hr {
    border: 2px solid lightgrey;
    margin-bottom: 25px;
}
`

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            memes: []
        }
    }

    componentDidMount() {
        memeService.getAll()
            .then(res => this.setState({ memes: res }))
    }
    render() {
        return (
            <StyledHomePage>
                <section id="meme-feed">
                    <h1>All Memes</h1>
                    <div id="memes">
                        {
                            this.state.memes.map(x =>
                                <Meme
                                    key={x._id}
                                    {...x}
                                />
                            )

                        }


                    </div>
                </section>
            </StyledHomePage>
        );
    }
}
export default HomePage;