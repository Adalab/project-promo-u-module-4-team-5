// import React from 'react'

const getDataProjects = async () => {
 const fetchData = await fetch("http://localhost:3110/listproject");
 const dataJson = await fetchData.json();
 return dataJson;
}


export default getDataProjects;



