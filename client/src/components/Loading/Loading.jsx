import "./Loading.css";
function Loading() {
  const quotes = [
    {
      quote:
        "Design is not just what it looks like and feels like. Design is how it works.",
      said: "Steve Jobs ",
    },
    {
      quote:
        "If your business is not on the internet, then your business will be out of business.",
      said: "Bill Gates ",
    },
    {
      quote:
        "The aim of marketing is to know and understand the customer so well the product or service fits him and sells itself.",
      said: "Peter Drucker",
    },
    {
      quote:
        "Marketing is no longer about the stuff you make, but about the stories you tell.",
      said: "Seth Godin",
    },
    {
      quote:
        "Ignoring online marketing is like opening a business but not telling anyone.",
      said: "Zero-TO",
    },
    {
      quote: "Content is fire, social media is gasoline.",
      said: "Jay Baer",
    },
    {
      quote:
        "Stopping advertising to save money is like stopping your watch to save time.",
      said: "Henry Ford",
    },
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div
      className="loading-container"
      style={{
        height: "100vh",
        backgroundColor: "#1e1e1e",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 3000,
      }}
    >
      <div className="loader"></div>
      <div className="loading-content">
        <div className="text_wraper">
          <div className="animationTexts">
            <div className="singl_text">
              <p>Creative</p>
            </div>
            <div className="singl_text">
              <p>Web Solutions</p>
            </div>
            <div className="singl_text">
              <p>Branding</p>
            </div>
            <div className="singl_text">
              <p>SocialMedia</p>
            </div>
            <div className="singl_text">
              <p>Marketing</p>
            </div>
            <div className="singl_text">
              <p>Media</p>
            </div>
            <div className="singl_text">
              <p>Production</p>
            </div>
          </div>
        </div>

        <img className="logo" src="/Zero-To logo wos.svg" alt="Logo" />
      </div>
      <div className="quote-container">
        <p className="quote-text"> &quot;{randomQuote.quote}&quot;</p>
        <p className="quote-author">- {randomQuote.said}</p>
      </div>
    </div>
  );
}

export default Loading;
