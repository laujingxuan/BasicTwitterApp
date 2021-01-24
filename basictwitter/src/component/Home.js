import React, {useState, useEffect} from 'react';
import TweetDataService from "../Services/TweetService";

const Home = (props) =>{
  const [items, setItems] = useState([]);
  const [newComment, setNewComment] = useState("");
  //Need to handle with session in the future, as in this user props data will be gone after refreshing
  //Must store the username somewhere
  const [username, setUsername] = useState(props.user);
  
  const getItems = () =>{
    TweetDataService.getTweets().then((response) => {
      setItems(response.data);
    }).catch(e => {
      console.log(e);
    });
  } 

  //[] to ensure only render the getItems() once.
  useEffect(() => {
      getItems();
    }, [])

  const removeItem = (id) => {
    // let newItems = items.filter((item) => item.id !== id);
    TweetDataService.deleteTweet(id).then(()=>getItems()).catch(e => {
      console.log(e);
    });
  } 

  const handleChange = (e) => {
    const comment = e.target.value;
    setNewComment(comment);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment){
      let newItem = {tweet: newComment, timeStamp: Date.now()};
      //Need to update to capture the login user later, hard coding now because session hasnt been implemented.
      TweetDataService.createTweet(items[0].user.id,newItem).then(() => {
        getItems();
      }).catch(e => {
        console.log(e);
      });
      setNewComment("");      
    }
  }
    
  return (
    <>
      <div className="title">
        <h3>
          Basic Twitter App
          <span className="right">Hi {username}</span>
        </h3>
      </div>

      <article className='form'>
        <form>
          <div className='form-control'>
            <label htmlFor="newComment">Comment: </label>
            <input type="text" id="newComment" value={newComment} onChange={handleChange}/>
          </div>
        </form>
        <button type='submit' className='btn' onClick={handleSubmit}>Send</button>
      </article>

      {items.map((item) => {
        return(
          <div key = {item.id} className='item'>
            <h4>{item.user.username}</h4>
            <h4>{item.tweet}</h4>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        )
      })}
    </>
  );
}

export default Home;