// import React, { useEffect } from "react";
// import EditorJS from "@editorjs/EditorJS";

// export default function index() {
//   const initEditor = () => {
//     new EditorJS({
//       holder: "editor",
//     });
//   };
//   useEffect(() => {
//     initEditor();
//   }, []);

//   return <div id="editor"></div>;
// }
// alert("Hello!"); - Great for checking if page is connected to css/html
window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  console.log(form);
});
