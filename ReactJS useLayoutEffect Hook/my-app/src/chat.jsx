import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const initialMessages = [
  { id: 1, author: 'Bot', text: 'Welcome! This chat uses useLayoutEffect to auto-scroll smoothly.' },
  { id: 2, author: 'Bot', text: 'Type a message and press Send to see the latest message appear without flicker.' },
]

function ChatScroll() {
  const [messages, setMessages] = useState(initialMessages)
  const [text, setText] = useState('')
  const [status, setStatus] = useState('Chat scroll ready')
  const listRef = useRef(null)
  const inputRef = useRef(null)
  const nextIdRef = useRef(initialMessages.length + 1)

  useLayoutEffect(() => {
    const list = listRef.current
    if (!list) return

    list.scrollTop = list.scrollHeight
    setStatus('Scrolled to latest message with useLayoutEffect')
  }, [messages])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const addMessage = (author, message) => {
    setMessages((current) => [
      ...current,
      { id: nextIdRef.current++, author, text: message },
    ])
  }

  const handleSend = (event) => {
    event.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return

    addMessage('You', trimmed)
    setText('')
    setStatus('Message sent — scrolling to latest update')

    const botReply = `Auto-reply: got your message (${trimmed.slice(0, 24)})`
    window.setTimeout(() => addMessage('Bot', botReply), 900)
  }

  return (
    <div style={styles.page}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={styles.card}>
        <div style={styles.header}>
          <div>
            <p style={styles.badge}>useLayoutEffect</p>
            <h2 style={styles.heading}>Chat Scroll Example</h2>
          </div>
          <p style={styles.subtext}>
            This example keeps the newest message visible before paint, using a professional dark UI palette and smooth transitions.
          </p>
        </div>

        <div ref={listRef} style={styles.messageList}>
          {messages.map((message) => {
            const isUser = message.author === 'You'
            return (
              <div key={message.id} style={{ ...styles.messageRow, justifyContent: isUser ? 'flex-end' : 'flex-start' }}>
                <div style={styles.metaRow}>
                  <span style={styles.author}>{message.author}</span>
                </div>
                <div style={{ ...styles.bubble, ...(isUser ? styles.userBubble : styles.botBubble) }}>
                  {message.text}
                </div>
              </div>
            )
          })}
        </div>

        <form onSubmit={handleSend} style={styles.form}>
          <input
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a message…"
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Send</button>
        </form>

        <p style={styles.status}>{status}</p>
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'radial-gradient(circle at top, rgba(14, 165, 233, 0.12), transparent 24%), linear-gradient(180deg, #020617 0%, #0c1320 58%, #0f172a 100%)',
    padding: '32px',
  },
  card: {
    width: '100%',
    maxWidth: '560px',
    borderRadius: '28px',
    background: 'linear-gradient(180deg, rgba(10, 18, 37, 0.98), rgba(14, 22, 45, 0.98))',
    border: '1px solid rgba(56, 189, 248, 0.12)',
    boxShadow: '0 34px 96px rgba(8, 16, 35, 0.35)',
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '22px',
    animation: 'fadeInUp 320ms ease-out both',
  },
  header: {
    display: 'grid',
    gap: '12px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '6px 12px',
    borderRadius: '999px',
    background: 'rgba(56, 189, 248, 0.16)',
    color: '#7dd3fc',
    fontSize: '0.82rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
  },
  heading: {
    margin: 0,
    color: '#f8fafc',
    fontSize: '2rem',
    lineHeight: 1.1,
  },
  subtext: {
    margin: 0,
    color: '#cbd5e1',
    lineHeight: 1.75,
    maxWidth: '96%',
  },
  messageList: {
    minHeight: '320px',
    maxHeight: '320px',
    overflowY: 'auto',
    padding: '22px',
    background: 'rgba(15, 23, 42, 0.94)',
    borderRadius: '22px',
    border: '1px solid rgba(148, 163, 184, 0.08)',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  messageRow: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    animation: 'fadeInUp 240ms ease-out',
  },
  metaRow: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  author: {
    fontSize: '0.78rem',
    color: '#94a3b8',
    letterSpacing: '0.04em',
  },
  bubble: {
    maxWidth: '88%',
    padding: '16px 20px',
    borderRadius: '22px',
    border: '1px solid rgba(148, 163, 184, 0.08)',
    boxShadow: '0 16px 30px rgba(8, 20, 43, 0.14)',
    transition: 'background 220ms ease, transform 220ms ease',
    wordBreak: 'break-word',
    lineHeight: 1.65,
    fontSize: '0.96rem',
  },
  botBubble: {
    background: 'rgba(15, 23, 42, 0.95)',
    color: '#e2e8f0',
    borderColor: 'rgba(148, 163, 184, 0.1)',
  },
  userBubble: {
    background: 'linear-gradient(135deg, #0ea5e9 0%, #22d3ee 100%)',
    color: '#0f172a',
    alignSelf: 'flex-end',
    borderColor: 'rgba(14, 165, 233, 0.28)',
  },
  form: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: '12px',
  },
  input: {
    width: '100%',
    padding: '16px 18px',
    borderRadius: '16px',
    border: '1px solid rgba(148, 163, 184, 0.14)',
    background: '#0b1220',
    color: '#f8fafc',
    outline: 'none',
    transition: 'border-color 180ms ease, box-shadow 180ms ease',
  },
  button: {
    padding: '16px 24px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)',
    border: 'none',
    color: '#020617',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'transform 180ms ease, box-shadow 180ms ease, opacity 180ms ease',
    boxShadow: '0 18px 40px rgba(14, 165, 233, 0.18)',
  },
  status: {
    margin: 0,
    color: '#94a3b8',
    fontSize: '0.95rem',
    textAlign: 'right',
  },
}

export default ChatScroll
