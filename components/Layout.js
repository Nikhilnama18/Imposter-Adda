export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <main className="main-content">
        {children}
      </main>

      <style jsx>{`
        .layout-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 1rem;
          background: radial-gradient(circle at top right, rgba(255, 153, 51, 0.15), transparent 40%),
                      radial-gradient(circle at bottom left, rgba(19, 136, 8, 0.15), transparent 40%);
        }
        
        .main-content {
          width: 100%;
          max-width: 600px;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          flex: 1;
        }
      `}</style>
    </div>
  );
}
