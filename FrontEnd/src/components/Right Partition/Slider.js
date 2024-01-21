import { useState ,useEffect } from "react";

export const Slider = ({ setPage, setPerPage, setIsLoading, perPage, count }) => {
  const pageNo = []
 
   for (let i = 0; i < Math.ceil(count / perPage); i++) {
     pageNo.push(i + 1);
   }
   
  const LoadingOn = () => {
    setIsLoading(true);
  };
  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
    LoadingOn();
  };
  const prevPage = () => {
    setPage((prevPage) => prevPage - 1);
    LoadingOn();
  };

  const jumpPage = (item)=>{
    LoadingOn();
    setPage(item);
  }

  const [currPageLimit, setCurrPageLimit] = useState(10);

  const changePageNumber = (e) => {
    const val = e.target.value;
    console.log(val);
    setCurrPageLimit(val);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setPerPage(currPageLimit);
      LoadingOn();
    }
  };
  return (
    <div className="slider">
      <div className="pageSlider">
        {pageNo.map((item, key) => {
            return (
              <button
                className="numbers"
                key={key}
                onClick={() => jumpPage(item)}
              >
                {item}
              </button>
            );
          })}
      </div>
      <div className="directionalButton">
        <button className="dir-btn color-blue" onClick={prevPage} href="" disabled={page === 1}>
          Previous
        </button>
        <div className="perPage">
          <input
            id="page-no"
            className="color-blue"
            type="text"
            placeholder="Per Page"
            value={currPageLimit}
            onChange={changePageNumber}
            onKeyDown={handleKeyDown}
          />
          <div className="color-blue">Repos Per Page</div>
        </div>
        <button className="dir-btn color-blue" onClick={nextPage} disabled={page === pageNo.length}>
          Next
        </button>
      </div>
    </div>
  );
};
