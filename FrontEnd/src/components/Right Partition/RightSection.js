import { RepoList } from './RepoList';
import { RightHeader } from './RightHeader';
import { Slider } from './Slider';
import {useState, useEffect } from 'react'
export const RightSection = ({ count, setIsLoading }) => {
  const [repoData, setRepoData] = useState();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const url = `https://new-api-app.onrender.com/data?page=${page}&limit=${perPage}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setRepoData(data.repositories);
        setTimeout(()=>{
          setIsLoading(false);
        },1700)
        console.log(perPage)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setRepoData, url]);
  return (
    <div>
      <RightHeader count={count} />
      <RepoList repoData={repoData} setIsLoading={setIsLoading} />
      <Slider
        setPage={setPage}
        setPerPage={setPerPage}
        perPage={perPage}
        count = {count}
        setIsLoading={setIsLoading}
        page={page}
      />
    </div>
  );
};
