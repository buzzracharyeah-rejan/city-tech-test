import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState();
  useEffect(() => {
    /* fetch data */
    const fetchData = async () => {
      return axios.post(
        'https://jp-dev.cityremit.global/web-api/transaction-manager/v1/admin/dashboard/search',
        {},
        { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` } }
      );
    };

    fetchData()
      .then((response) => setData(response.data.data))
      .catch((err) => console.log(err));
  }, []);
  return <div>{JSON.stringify(data)}</div>;
};

export default Dashboard;
