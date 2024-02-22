function Pagination({ page, setPage, totalPages }) {

  const handlePrevious = () => {
    if (page> 1) {
      setPage(prevPage => prevPage - 1);
    
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page => page + 1);
    }
  };

  return (
    <div>
      <button onClick={handlePrevious} disabled={page === 1}>Previous</button>
      <span>{page}</span>
      <button onClick={handleNext} disabled={page === totalPages}>Next</button>
    </div>
  );

}

export default Pagination;