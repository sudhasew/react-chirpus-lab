import "./Main.css";

export function Main() {
  return (
    <main>
      <section className="about-parent-container">
        <div className="about-container side-by-side-item">
          <h2>chirpus inc.</h2>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui in
            ipsum fugiat atque obcaecati repellendus sunt,delectus a optio magni
            dolorum eligendi sapiente ut ab, dignissimos aliquam. Ducimus,
            natus? Amet qui in ipsum fugiat atque obcaecati repellendus
            sunt,delectus a optio magni dolorum eligendi sapiente ut ab,
            dignissimos aliquam.
          </p>
          <button className="btn">Call To Action</button>
        </div>
        <div className="side-by-side-item1">
          <div className="container">
            <div className="small"></div>
            <div className="medium"></div>
            <div className="large"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
