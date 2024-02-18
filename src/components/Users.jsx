import React, {useEffect, useState} from 'react'
import Ulist from './Ulist'

const Users = () => {

  const [articles, setArticles] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)

  
  async function userData(){
    try {
      const url = 'https://602e7c2c4410730017c50b9d.mockapi.io/users'
      const data = await fetch(url);
      const parsedData = await data.json();
      setArticles(parsedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(()=>{
    userData()
  },[])

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div style={{ display: 'flex' }}>
    <div style={{ flexGrow: 1 }}>
      {articles && articles.length > 0 && (
        <div>
          {articles.slice(10).map((element) => (
            <div className="User_data" key={element.id} onClick={() => handleUserClick(element)}
            style={{}}
            >
              <Ulist
                jobTitle={element.jobTitle}
                avatar={element.avatar}
                // bio={element.bio}
                profile={element.profile}
                // createdAt={element.createdAt}
              />
            </div>
          ))}
        </div>
      )}
    </div>

    {/* <div className="divider" style={{ minHeight: "500px", width: '2px'}}/> */}
    
    {selectedUser && (
      //style={{ marginLeft: '20px', marginTop: '40px', border: '1px solid #ccc', padding: '10px', width: '300px' }}
      <div className='Data_display'  style={{
        position: 'fixed',
        top: '200px', // Adjust as needed
        right: '20px',
        border: '2px solid #ccc',
        borderRightWidth: '500px',
        borderTop: '0px',
        borderRight: '0px',
        borderBottom: '0px',
        padding: '10px',
        width: '300px',
        maxHeight: 'calc(100vh - 100px)', // Adjust as needed
        overflowY: 'auto',
        zIndex: '1' // Ensure it's above other content
      }}>
        <h2>User Details</h2>
        <img src={selectedUser.avatar} />
        <p>Job Title: {selectedUser.jobTitle}</p>
        {/* <p>Bio: {selectedUser.bio}</p> */}
        <p>Username: {selectedUser.profile.username}</p>
        <p>Email: {selectedUser.profile.email}</p>
        <p>Created At: {selectedUser.createdAt}</p>
      </div>
    )}
  </div>
);
};

export default Users