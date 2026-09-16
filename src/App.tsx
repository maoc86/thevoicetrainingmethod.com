import './App.css'

const WHATSAPP_URL = 'https://wa.me/17863528312'
const EMAIL = 'Voicetraininginfo@gmail.com'

function App() {
  return (
    <div className="page">
      <main className="stage">
        <img src="/Fucsia.png" className="logo" alt="The Voice Training Method" />
      </main>
      <footer className="footer">
        <a className="footer-link" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <svg className="footer-icon" role="presentation" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.2-3.5-.7-2.9-1.2-4.8-4.1-5-4.3-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.6-.4.8-.4h.6c.2 0 .5-.1.7.5l1 2.3c.1.2.1.4 0 .6l-.4.6-.5.6c-.2.2-.3.4-.1.6.1.3.7 1.2 1.6 1.9 1.1 1 2 1.3 2.3 1.4.3.1.5.1.6-.1l1-1.1c.2-.3.4-.2.6-.1l2.1 1c.3.2.5.3.6.4 0 .2 0 .6-.2.9Z" />
          </svg>
          +1 786 352 8312
        </a>
        <span className="footer-divider" aria-hidden="true"></span>
        <a className="footer-link" href={`mailto:${EMAIL}`}>
          <svg className="footer-icon" role="presentation" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
          </svg>
          {EMAIL}
        </a>
      </footer>
    </div>
  )
}

export default App