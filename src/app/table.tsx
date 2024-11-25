"use client";

import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

interface IProps {
  blogs: IBlog[];
}
function AppTable(props: IProps) {
  const { blogs } = props;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((blog) => (
          <tr>
            <td key={blog.id}>{blog.id}</td>
            <td>{blog.title}</td>
            <td>{blog.author}</td>
            <td>
              <Button variant="primary">View</Button>
              <Button variant="warning mx-2 ">Edit</Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default AppTable;
