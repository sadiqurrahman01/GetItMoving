export default function Footer() {
  return (
    <footer
      style={{
        background: "#111",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
        marginTop: "40px"
      }}
    >
      <p>© {new Date().getFullYear()} Get It Moving · We Get It Moving Every Time</p>
      <p>www.getitmoving.co.uk</p>
    </footer>
  );
}