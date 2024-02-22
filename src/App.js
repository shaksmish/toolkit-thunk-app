import './App.css';
import { useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getPhotos } from './galleryState';

function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.gallery.photos);
  const [page, setPage] = useState(3);

  useEffect(() => {
    dispatch(getPhotos(page));
  }, [dispatch, page]);

  const handleViewMore = () => {
    setPage(prevPage => prevPage + 1);
  }

  return (
    <div className="App">
      <h1>PHOTO GALLERY</h1>
      <p>This is a photo gallery made using redux toolkit and redux thunk</p>
      <hr />
      <div className="Gallery">
        {photos.map(photo => (
          <img 
          key={photo.id}
          alt={photo.author}  
          src={photo.download_url} 
          width="400"
          height="400"
          />
        ))}
      </div>
      <button onClick={handleViewMore}>VIEW MORE</button>
    </div>
  );
}

export default App;
