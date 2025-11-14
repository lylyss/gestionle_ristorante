import { Navbar } from "react-bootstrap";

function MyNav() {
  return (
    <Navbar
      expand="lg"
      className="py-4 px-5 fixed-top text-nowrap d-flex flex-row justify-content-center align-items-center"
      bg="dark"
      data-bs-theme="dark"
    >
      <Navbar.Brand href="/" className="mb-4 fs-2 fw-bold d-flex justify-content-center align-items-center">
        Bistrot Ristorante
      </Navbar.Brand>
      <div className="flex-grow-1 d-flex align-items-center mynav-navcontainer">
        <nav className="overflow-auto mynav-nav">
          <ul className="d-flex gap-3 mb-1 mynav-list">
            <li className="mynav-li">
              <h6 className="text-white text-center mb-0">Primi</h6>
            </li>
            <li className="mynav-li">
              <h6 className="text-white text-center mb-0">Secondi</h6>
            </li>
            <li className="mynav-li">
              <h6 className="text-white text-center mb-0">Contorni</h6>
            </li>
            <li className="mynav-li">
              <h6 className="text-white text-center mb-0">Dessert</h6>
            </li>
            <li className="mynav-li">
              <h6 className="text-white text-center mb-0">Soft drinks</h6>
            </li>
            <li className="mynav-li">
              <h6 className="text-white text-center mb-0">Alcolici</h6>
            </li>
          </ul>
        </nav>
      </div>
    </Navbar>
  );
}

export default MyNav;
