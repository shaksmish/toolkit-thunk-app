import './App.css';
import { useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getPhotos } from './galleryState';

import Pagination from './Pagination';

function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.gallery.photos);
  const [page, setPage] = useState(1);
  const totalPages = 10;

  useEffect(() => {
    dispatch(getPhotos(page));
  }, [dispatch, page]);

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
      
      <Pagination 
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;
