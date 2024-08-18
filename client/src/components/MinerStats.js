import React, { useEffect, useState } from 'react';
import './MinerStats.css';

const MinerStats = () => {
  const [stats, setStats] = useState({
    hashRate: '',
    uptime: '',
    acceptedShares: 0,
    rejectedShares: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/mining/stats');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching mining stats:', error);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 60000); // Refresh every 60 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="miner-stats">
      <h2>Current Mining Stats</h2>
      <p>💻 Hash Rate: {stats.hashRate}</p>
      <p>⏰ Uptime: {stats.uptime}</p>
      <p>✅ Accepted Shares: {stats.acceptedShares}</p>
      <p>❌ Rejected Shares: {stats.rejectedShares}</p>
    </div>
  );
};

export default MinerStats;
