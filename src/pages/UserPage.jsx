import React, { useState, useEffect } from "react";
import axios from "axios";

function UserPage() {
  const token = {
    headers: {
      Authorization:
        "beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hc2hhQGdtYWlsLmNvbSIsImlkIjoyMSwiaWF0IjoxNTc3MTMyMjAwLCJleHAiOjE1NzcxMzU4MDB9.5OBZUr41EW8g2DsuUdAWZLb5zgLK7PGrZWVNY2JBPSE"
    }
  };

  //   useEffect(
  //     axios.get("http://localhost:8000/21", token).then(res => {
  //       console.log(res);
  //     }, [])
  //   );
  return (
    <div>
      <h1>User page</h1>
    </div>
  );
}

export default UserPage;
