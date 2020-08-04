import React from 'react'
import { Helmet } from 'react-helmet'

import styles from './projectcard.module.scss'

export default () => {
    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <script defer src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            </Helmet>
            <div className={styles.cardcontainer}>
                <main className='card'>
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="https://i.imgur.com/sKD5FWA.png" alt='slot machine game'/>
                    </div>
                    <article className='card-content'>
                        <span className="card-title activator">Slot Machine Game<i className="material-icons right">more_vert</i></span>
                        <p>To see the GitHub for this project click <a href="https://github.com/CodingSalmon/slot-machine-game">here</a>.</p>
                    </article>
                    <summary className='card-reveal black'>
                        <span className="card-title">Slot Machine Game<i className="material-icons right">close</i></span>
                        <p>A slot machine game using only JavaScript. <br></br><br></br>Click <a href='https://codingsalmon.github.io/slot-machine-game/'>here</a> to go to the deployed application.</p>
                    </summary>
                </main>
                
                <main className='card'>
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="https://i.imgur.com/cyqPYct.png" alt='uppost'/>
                    </div>
                    <article className='card-content'>
                        <span className="card-title activator">UpPost<i className="material-icons right">more_vert</i></span>
                        <p>To see the GitHub for this project click <a href="https://github.com/CodingSalmon/uppost">here</a>.</p>
                    </article>
                    <summary className="card-reveal black">
                        <span className="card-title">UpPost<i className="material-icons right">close</i></span>
                        <p>A social media website using Node, Express, and mongoDB. <br></br><br></br>Click <a href='https://uppost.herokuapp.com/'>here</a> to go to the deployed application.</p>
                    </summary>
                </main>

                <main className='card'>
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="https://i.imgur.com/764Rkcr.png" alt='gamefaves'/>
                    </div>
                    <article className='card-content'>
                        <span className="card-title activator">GameFaves<i className="material-icons right">more_vert</i></span>
                        <p>To see the GitHub for this project click <a href="https://github.com/CodingSalmon/gamefaves">here</a>.</p>
                    </article>
                    <summary className="card-reveal black">
                        <span className="card-title">GameFaves<i className="material-icons right">close</i></span>
                        <p>A group project building a social media site based on video games using Django and PostgreSQL. <br></br><br></br>Click <a href='https://gamefavesapp.herokuapp.com/'>here</a> to go to the deployed application.</p>
                    </summary>
                </main>

                <main className='card'>
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="https://i.imgur.com/sgHiQbg.png" alt='pokefaves'/>
                    </div>
                    <article className='card-content'>
                        <span className="card-title activator">PokéFaves<i className="material-icons right">more_vert</i></span>
                        <p>To see the GitHub for this project click <a href="https://github.com/CodingSalmon/pokefaves">here</a>.</p>
                    </article>
                    <summary className="card-reveal black">
                        <span className="card-title">PokéFaves<i className="material-icons right">close</i></span>
                        <p>A MERN stack application based around Pokémon. <br></br><br></br>Click <a href='https://pokefaves.herokuapp.com/'>here</a> to go to the deployed application.</p>
                    </summary>
                </main>
            </div>
        </>
    )
}