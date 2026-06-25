import React, { useState, useEffect } from 'react';
import { useEffectEvent } from '../hooks/useEvent';
import './Widgets.css';

// A mock chat connection to simulate receiving live data
function createChatConnection(serverUrl, onConnect, onDisconnect, onReceiveMessage) {
  let interval;
  console.log(`🔌 Connecting to "${serverUrl}"`);

  setTimeout(() => {
    onConnect();
    interval = setInterval(() => {
      const messages = [
        "Hey, how's the project going?",
        "Don't forget to push your code!",
        "React hooks are awesome 🔥",
        "Who wants coffee ☕?",
        "useEffectEvent is a lifesaver!"
      ];
      onReceiveMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, 3000); // Receive a message every 3 seconds
  }, 1000); // 1s connect delay

  return () => {
    console.log(`🔌 Disconnecting from "${serverUrl}"`);
    clearInterval(interval);
    onDisconnect();
  };
}

export default function ChatRoom() {
  const [serverUrl, setServerUrl] = useState('wss://react.chat.server/general');
  const [messages, setMessages] = useState([]);
  const [isMuted, setIsMuted] = useState(false);
  const [status, setStatus] = useState('Disconnected');

  // The Event Hook: Accesses reactive state (isMuted) but won't trigger reconnects!
  const onReceiveMessage = useEffectEvent((message) => {
    if (isMuted) {
      // If we are muted, maybe just log it or add a "silent" flag
      console.log(`🔕 Muted message received: ${message}`);
      setMessages(prev => [...prev.slice(-4), { text: message, silent: true }]);
    } else {
      // Normal message, would trigger a notification sound in a real app
      console.log(`🔔 NEW MESSAGE (Ping!): ${message}`);
      setMessages(prev => [...prev.slice(-4), { text: message, silent: false }]);
    }
  });

  const onConnect = useEffectEvent(() => {
    setStatus('Connected');
  });

  const onDisconnect = useEffectEvent(() => {
    setStatus('Disconnected');
  });

  // The Effect Hook: Only depends on the serverUrl.
  // It NEVER reconnects when toggling `isMuted` because we passed onReceiveMessage as an event!
  useEffect(() => {
    setStatus('Connecting...');

    // Establishing the chat connection
    const cleanup = createChatConnection(serverUrl, onConnect, onDisconnect, onReceiveMessage);

    // If serverUrl changes, it cleans up and reconnects
    return cleanup;
  }, [serverUrl]); // Dependency array: ONLY connect-related variables!

  return (
    <div className="widget-card animate-fade-in glass-panel chat-widget">
      <div className="widget-header secondary">
        <div className="widget-icon accent">💬</div>
        <div>
          <h3>Live Chat Connection</h3>
          <p className="widget-subtitle">Connection `useEffect` decoupled from Theme/Mute state</p>
        </div>
        <div className={`status-badge ${status === 'Connected' ? 'success' : status === 'Connecting...' ? 'warning' : 'neutral'}`}>
          <span className={status === 'Connecting...' ? 'spinner' : 'dot'}></span>
          {status}
        </div>
      </div>

      <div className="widget-content">
        <div className="controls">
          <div className="control-group">
            <label>Server Instance:</label>
            <select value={serverUrl} onChange={e => setServerUrl(e.target.value)} className="glass-select">
              <option value="wss://react.chat.server/general">General Channel</option>
              <option value="wss://react.chat.server/tech">Tech Support</option>
              <option value="wss://react.chat.server/random">Random Talk</option>
            </select>
          </div>

          <button
            className={`btn-mute ${isMuted ? 'muted' : 'active'}`}
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? '🔕 Unmute Notifications' : '🔔 Mute Notifications'}
          </button>
        </div>

        <div className="alert-box info-alt">
          <strong>Goal:</strong> Toggle the "Mute" button. The chat connection (look at the status badge) will NOT drop and reconnect. It stays connected!
        </div>

        <div className="chat-window">
          {messages.length === 0 && <p className="empty-chat">Waiting for messages...</p>}
          {messages.map((msg, i) => (
            <div key={i} className={`chat-bubble ${msg.silent ? 'silent-bubble' : 'new-bubble'}`}>
              {!msg.silent && <span className="bubble-ping">🔔</span>}
              {msg.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
