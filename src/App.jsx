const App = () => {
  return (
    <div className={"Main"}>
      {/* <img src="/assets/img3.webp" alt="" className="main-bg" />
       */}
      <video
        src="/assets/video.webm"
        loop
        muted
        autoplay={"autoplay"}
        preload="auto"
        className="main-bg"
      ></video>
      <div className="content">
        <h1>Sorry!</h1>
        <h3
          style={{
            backgroundColor: "var(--blue)",
            padding: "0.5rem",
            borderRadius: "0.5rem",
          }}
        >
          Registrations closed for now!
        </h3>
        <h3>Will re-begin shortly!</h3>
      </div>
    </div>
  );
};
export default App;
