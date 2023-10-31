export default function Home() {
  return (
    <section className="bg-warning m-auto p-auto">
      <div className="container px-4">
        <div className="row align-items-center p-5 gap-5">
          <div className="col">
            <h1 className="text-white">ARE YOU STARVING?</h1>
            <h3 className="text-white">
              Within a few clicks, find meals that are accessible near you
            </h3>
            <div className="form-custom bg-light p-4 m-3 ms-0 mt-4 border border-dark rounded-3 shadow">
              <div className="icons-form d-flex gap-3 ms-1">
                <div className="delivery border-end border-start border-top border-dark rounded-top bg-warning text-white ps-3 pe-3">
                  <i className="bi bi-truck">Delivery</i>
                </div>
                <div className="pickup delivery border-end border-start border-top border-dark rounded-top bg-warning text-white ps-3 pe-3">
                  <i className="bi bi-bag">Pickup</i>
                </div>
              </div>
              <form className="d-flex gap-3" role="search">
                <input
                  className="form-control border-dark"
                  type="search"
                  placeholder="Find the nearest location"
                  aria-label="Search"
                />
                <button className="btn btn-outline-dark shadow-sm" type="submit">
                <i className="ri-search-line" width="20px"></i>Search
                </button>
              </form>
            </div>
          </div>
          <div className="col">
            <img
              src="/src/assets/hero-header.png"
              alt=""
              width={400}
              height={400}
              className="ms-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
