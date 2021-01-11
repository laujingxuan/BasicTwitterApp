import logo from './logo.svg';
import {useState} from 'react';
import {data} from './data/data';

function App() {

  const [items, setItems] = useState(data);
  const [newComment, setNewComment] = useState("");

  const removeItem = (id) => {
    let newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  } 

  const handleChange = (e) => {
    const comment = e.target.value;
    setNewComment(comment);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment){
      const latestId = items.reduce((item1, item2) => {
        if (item1.id > item2.id){
          return item1;
        }else{
          return item2;
        }
      });
      let newItem = {id: latestId+1, user: "John", comment: newComment};
      setItems([...items, newItem]);
      setNewComment("");
    }
  }
    
  

  return (
    <>
      <div className="title"><h3>Basic Twitter App</h3></div>

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
            <h4>{item.user}</h4>
            <h4>{item.comment}</h4>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        )
      })}
    </>
  );
}

export default App;
