import { UserDetails } from './UserDetails';
import { useState, useEffect} from 'react';
export const LeftSection = ({ setCount}) => {
  const [data, setData] = useState({});
  const url = 'https://api.github.com/users/freeCodeCamp';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setCount(data.public_repos);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [setCount]);
  return (
    <div>
      <UserDetails data={data} />
    </div>
  );
};
