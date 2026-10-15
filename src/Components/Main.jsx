import {useState, useEffect} from 'react'
import './Main.css'
import {isVisible} from "@testing-library/user-event/dist/utils";

function Main(){
    let [games, setGames] = useState([]);
    let [visible, setVisible] = useState(false);
    let [range, setRangeValue] = useState(5);
    let [error, setError] = useState('');
    let [title, setTitle] = useState('');
    let [comment, setComment] = useState('');

    function addGameDash(){
        setVisible(true);
    }
    function rangeValueChange(e){
        setRangeValue(Number(e.target.value))
    }
    function commentChange(e){
        setComment(e.target.value)
    }
    function titleChange(e){
        setTitle(e.target.value)
    }
    function Sumbit(){
        if(!title){
            setError('ERROR: Your title is empty');
            return null;
        }
        if(!comment){
            setError('ERROR: Your comment is empty');
            return null;
        }
        let titleValue = title;
        let commentValue = comment;
        let rangeValue = range;
        setVisible(false);
        setTitle('')
        setComment('')
        setRangeValue(5)

        let data = {
            id: games.length + 1,
            title: titleValue,
            comment: commentValue,
            range: rangeValue,
        }
        setGames([...games, data])



    }
    function clear(){
        setGames([]);
        setVisible(false);
    }

    return(
        <div className={'main'}>
            <div className="top">
                <div className="buttons">
                    <button onClick={addGameDash} className={'add'}>Add Game</button>
                    <button onClick={clear} className={'clear'}>Clear</button>
                </div>
                {visible && (
                    <div className="dashboard">
                        <h2>Add the game to your library</h2>
                        <div className={'gamenameDiv'}>
                            <p>Game Name:</p>
                            <input onChange={titleChange} value={title} type={'text'} maxLength={30} className={'gameName'}/>
                        </div>
                        <p>Rating:</p>
                        <div className={'range'}>
                            <p className={'value'}>{range}</p>
                            <input value={range} onChange={rangeValueChange} type={'range'} min={'1'} max={'10'} className={'rating'} />
                        </div>
                        <div className={'commentDiv'}>
                            <label>Comment</label>
                            <textarea onChange={commentChange} value={comment} rows={6} className={'comment'} maxLength={400}/>
                        </div>
                        <button onClick={Sumbit}>Sumbit</button>
                        <span className={'error'}>{error}</span>
                    </div>

                )}


            </div>

            <div className="games">
                <ul>
                    {games.map(game => (
                        <li key={game.id}>
                            <p className={'titles'}>
                                {game.title}
                            </p>
                            <p className={'ratings'}> Rating: {game.range} </p>
                            <p className={'comments'}> Comment: <br/>{game.comment} </p>
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    )
}

export default Main;