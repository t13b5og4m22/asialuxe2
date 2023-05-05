import './Tabs.css';
import { useState } from 'react';

function Tabs() {
  const [tab, setTab] = useState(0); // 0,1,2 - avia, tour, hotels
  return (
    <div className="Tabs">
        <button className={tab === 0 ? 'active' : ''} onClick={() => setTab(0)}>Авиабилеты</button>
        <button className={tab === 1 ? 'active' : ''} onClick={() => setTab(1)}>Туры</button>
        <button className={tab === 2 ? 'active' : ''} onClick={() => setTab(2)}>Отели</button>
    </div>
  );
}

export default Tabs;