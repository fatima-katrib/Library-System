import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../pages/about";
import Home from "../../pages/home/home";
import Contact from "../../pages/contact";
import Books from "../../pages/books/books";
import Book from "../../pages/book/book";
import AdminForm from "../../pages/admin form";
import BorrowingForm from "../../pages/borrowing form";
import AddEditbook from "../../pages/add-edit a book";
import AdminDashboard from "../../pages/admin-dashboard/admin";

class AllRoutes extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/books" element={<Books/>} />
          <Route path="/book/:id" element={<Book/>} />
          <Route path="/adminform" element={<AdminForm/>} />
          <Route path="/borrowingform" element={<BorrowingForm/>} />
          <Route path="/add-edit a book" element={<AddEditbook/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
        </Routes>
      </div>
    );
  }
}

export default AllRoutes;
