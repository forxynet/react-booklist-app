import { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

export default function NewBookForm() {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_BOOK', book: { title, author } });
    clearForm();
  }

  function clearForm() {
    setTitle('');
    setAuthor('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='book title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type='text'
        placeholder='book author'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input type='submit' value='add book' />
    </form>
  )
}
