import React, {useState, useEffect} from 'react';
import TweetDataService from "../Services/TweetService";
import Auth from './Auth';
import UserDataService from "../Services/UserService";

const Home = (props) =>{
  const [items, setItems] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState(sessionStorage.getItem('name'));
  const getItems = () =>{
    //setItems need to be inside the "then" as it should only be done after axios return the data
    //axios request sent to a server are always asynchronous. If setItems is not put within the "then", setItems will be called before data is returned, which is wrong
    TweetDataService.getTweets().then((response) => setItems(response.data)).catch(e => console.log(e));
  } 

  //[] to ensure only render the getItems() once.
  useEffect(() => {
      getItems();
  }, [])

  const removeItem = (id) => {
    // let newItems = items.filter((item) => item.id !== id);
    TweetDataService.deleteTweet(id).then(()=>getItems()).catch(e => console.log(e));
  } 

  const handleChange = (e) => {
    const comment = e.target.value;
    setNewComment(comment);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment){
      //Date.now() returns the current timestamp
      let newItem = {tweet: newComment, timeStamp: Date.now()};
      //Find the userId of the user
      const userId = () =>{
        for (let i = 0; i < items.length; i++){
          if (items[i].user.username.toUpperCase() === username.toUpperCase()){
            return items[i].user.id;
          }
        }
      }
      console.log(userId());
      if (userId){
        TweetDataService.createTweet(userId(),newItem).then(() => {
          getItems();
        }).catch(e => {
          console.log(e);
        });
      }
      setNewComment("");      
    }
  }

  //to use in array filtering and only returns distinct value in the array
  const distinct = (value, index, self) => {
    return self.indexOf(value) === index;
  }

  const filterItem = (e) => {
    if (e.target.value === "all"){
      getItems();
    }else{
      UserDataService.getTweets(e.target.value).then((response) => setItems(response.data)).catch(e => console.log(e));      
    }
  }
    
  return (
    <>
      <div className="title">
        <h3>Basic Twitter App</h3>
      </div>
      <div className="center cssname">
        <h3>
          Hi {username}
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

      <div className='item'>
        <h4>Filtering: </h4>
        <form>
          <select onChange={filterItem} >
            <option disabled defaultValue> -- select an option -- </option>
            <option value="all">All</option>
            {items.map((item) => item.user.username).filter(distinct).map((user) => {
              return(
                <option key ={user} value={user} className='capitalize'>{user}</option>
              )
            })}
          </select>
        </form>       
      </div>

      {items.map((item) => {
        return(
          <div key = {item.id} className='item'>
            <h4>{item.user.username}</h4>
            <h4>{item.tweet}</h4>
            {item.user.username === username ? (<button onClick={() => removeItem(item.id)}>Remove</button>):(<span className="tab"></span>)}
          </div>
        )
      })}
      <span className="right title">
        <button type="button" className="btn btn-light" onClick = {() => {
          Auth.logout(() => {
            props.history.push("/");
          })
        }}>Logout</button>
      </span>
    </>
  );
}

export default Home;