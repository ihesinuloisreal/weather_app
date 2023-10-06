import React from "react"
import styled from "styled-components"

type Props = {}

export default function Index({}: Props) {
    const ConFluide = styled.div`
      grid-template-columns: 1fr 2fr;
    `
  return (
    <>
        <div className="container">
          <header className="py-3 mb-3 border-bottom">
    <ConFluide className="container-fluid d-grid gap-3 align-items-center" >
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li><a className="dropdown-item active" href="#" aria-current="page">Overview</a></li>
          <li><a className="dropdown-item" href="#">Inventory</a></li>
          <li><a className="dropdown-item" href="#">Customers</a></li>
          <li><a className="dropdown-item" href="#">Products</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item" href="#">Reports</a></li>
          <li><a className="dropdown-item" href="#">Analytics</a></li>
        </ul>
      </div>

      <div className="d-flex align-items-center">
        <form className="w-100 me-3" role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="flex-shrink-0 dropdown">
          <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </ConFluide>
    </header>
          <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
              <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
              <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
              <li className="nav-item"><a href="#" className="nav-link">About</a></li>
            </ul>
          </header>
          
  </div>
    </>
  )
}