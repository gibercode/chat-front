import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "./home.module.css"

const Home = () => {

  const [roomName, setRoomName] = useState('')

  const handleRoomNameChange = event => {
    const { target: { value } } = event
    setRoomName(value);
  };

  return (
    <div className={styles._main}>
      <div className={styles._form}>
      <input
        type="text"
        placeholder="Room"
        value={roomName}
        onChange={handleRoomNameChange}
        className={styles._input}
      />
      <Link to={`/${roomName}`} className={styles._btn}>
        JOIN ROOM
      </Link>
      </div>

    </div>
  )
}

export default Home;