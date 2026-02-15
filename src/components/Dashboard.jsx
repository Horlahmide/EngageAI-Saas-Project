import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Activity,
  Users,
  Target,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

// Simple Counter Component for Animation
const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    // Parse end value (remove non-numeric chars for calculation if needed,
    // but here we assume 'end' is a number string like "12.4" and we want to animate linearly)
    // For simplicity with formatted strings like "12.4k", we might need a parser.
    // Let's assume passed 'end' is a number, and 'suffix' is the "k" or "%".
    const endVal = parseFloat(end);
    if (isNaN(endVal)) return;

    const increment = endVal / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= endVal) {
        setCount(endVal);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  // Format to 1 decimal place if it has decimals, else integer
  const formatted = count % 1 !== 0 ? count.toFixed(1) : Math.floor(count);
  return (
    <span>
      {formatted}
      {suffix}
    </span>
  );
};

const Dashboard = ({
  title = "Performance Overview",
  accentColor = "#4f46e5",
}) => {
  const [data, setData] = useState([
    { name: "Mon", value: 400 },
    { name: "Tue", value: 300 },
    { name: "Wed", value: 600 },
    { name: "Thu", value: 800 },
    { name: "Fri", value: 500 },
    { name: "Sat", value: 900 },
    { name: "Sun", value: 1100 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        return [
          ...prev.slice(1),
          {
            name: days[Math.floor(Math.random() * 7)],
            value: Math.floor(Math.random() * 1000) + 200,
          },
        ];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const gradientId = `gradient-${title.replace(/\s/g, "")}`;

  return (
    <div className="glass-card dashboard-widget dashboard-grid-container">
      {/* Header spanning full width */}
      <div className="dashboard-header full-width">
        <div>
          <h3>{title}</h3>
          <p>Real-time AI metrics</p>
        </div>
        <div className="dashboard-header-icon">
          <Activity size={20} />
        </div>
      </div>

      {/* Main Stats (Top Row) */}
      <div className="dashboard-stats full-width">
        <div className="dashboard-stat">
          <span className="dashboard-stat-label">
            <Users size={12} /> Active Users
          </span>
          <span className="dashboard-stat-value">
            <Counter end={12.4} suffix="k" />
          </span>
          <span className="dashboard-stat-change">+12%</span>
        </div>
        <div className="dashboard-stat">
          <span className="dashboard-stat-label">
            <Target size={12} /> Conversions
          </span>
          <span className="dashboard-stat-value">
            <Counter end={2.8} suffix="k" />
          </span>
          <span className="dashboard-stat-change">+18%</span>
        </div>
        <div className="dashboard-stat">
          <span className="dashboard-stat-label">
            <Activity size={12} /> Retention
          </span>
          <span className="dashboard-stat-value">
            <Counter end={84} suffix="%" />
          </span>
          <span className="dashboard-stat-change">+5%</span>
        </div>
        <div className="dashboard-stat">
          <span className="dashboard-stat-label">
            <Target size={12} /> Avg. Time
          </span>
          <span className="dashboard-stat-value">4m 12s</span>
          <span className="dashboard-stat-change">+12%</span>
        </div>
      </div>

      {/* Main Chart (Left Column, Spans 2 rows if needed) */}
      <div className="dashboard-chart-section">
        <h4 className="chart-title">Traffic Overview</h4>
        <div className="dashboard-chart">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={accentColor} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={accentColor} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  background: "#111827",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                }}
                itemStyle={{ color: "#fff" }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke={accentColor}
                fillOpacity={1}
                fill={`url(#${gradientId})`}
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity (Right Column) */}
      <div className="dashboard-activity-section">
        <h4 className="chart-title">Recent Activity</h4>
        <ul className="activity-list">
          <li>
            <div className="activity-dot"></div>
            <div>
              <p className="activity-text">New user signed up</p>
              <span className="activity-time">2 mins ago</span>
            </div>
          </li>
          <li>
            <div
              className="activity-dot"
              style={{ background: "#f59e0b" }}
            ></div>
            <div>
              <p className="activity-text">Subscription renewed</p>
              <span className="activity-time">15 mins ago</span>
            </div>
          </li>
          <li>
            <div
              className="activity-dot"
              style={{ background: "#22c55e" }}
            ></div>
            <div>
              <p className="activity-text">Campaign started</p>
              <span className="activity-time">1 hr ago</span>
            </div>
          </li>
          <li>
            <div
              className="activity-dot"
              style={{ background: "#ec4899" }}
            ></div>
            <div>
              <p className="activity-text">Server backup</p>
              <span className="activity-time">3 hrs ago</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
