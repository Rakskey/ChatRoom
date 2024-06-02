

export default function Footer() {

    return (
      <>
        <footer
          style={{
            position: "fixed",
            bottom: "0",
            width: "100%",
            backgroundColor: "#f8f9fa",
            padding: "20px",
            textAlign: "center",
            borderTop: "1px solid #ddd",
          }}
        >
          <p>
            Powered by{" "}
            <a
              href="https://www.react.dev"
              title="React"
              target="_blank"
              rel="noreferrer"
            >
              React development
            </a>
          </p>
        </footer>
      </>
    );
}