import { Navbar } from "react-bootstrap";

function MyNav() {
  return (
    <Navbar expand="xl" className="py-4 px-5 fixed-top text-nowrap" bg="dark" data-bs-theme="dark">
      <Navbar.Brand href="/" className="mb-3 fs-2 fw-bold d-flex justify-content-center w-100">
        Bistrot
      </Navbar.Brand>
      <div className="flex-grow-1 d-flex align-items-center" style={{ minWidth: 0 }}>
        <nav
          className="w-100 overflow-auto"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "thin",
          }}
        >
          <ul
            className="d-flex gap-3 mb-2"
            style={{
              listStyle: "none",
            }}
          >
            <li style={{ minWidth: 100 }}>
              <h6 className="text-white text-center mb-0">Primi</h6>
            </li>
            <li style={{ minWidth: 100 }}>
              <h6 className="text-white text-center mb-0">Secondi</h6>
            </li>
            <li style={{ minWidth: 100 }}>
              <h6 className="text-white text-center mb-0">Contorni</h6>
            </li>
            <li style={{ minWidth: 100 }}>
              <h6 className="text-white text-center mb-0">Dessert</h6>
            </li>
            <li style={{ minWidth: 100 }}>
              <h6 className="text-white text-center mb-0">Soft drinks</h6>
            </li>
            <li style={{ minWidth: 100 }}>
              <h6 className="text-white text-center mb-0">Alcolici</h6>
            </li>
          </ul>
        </nav>
      </div>
    </Navbar>
  );
}

export default MyNav;
