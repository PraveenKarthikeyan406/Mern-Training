   // JS Book Object
    let book = {
      title: "The Alchemist",
      author: "Paulo Coelho",
      pages: 208,
      publishedYear: 1988
    };

    // Show on HTML
    document.getElementById("bookTitle").textContent = "Title: " + book.title;
    document.getElementById("bookAuthor").textContent = "Author: " + book.author;
    document.getElementById("bookPages").textContent = "Pages: " + book.pages;
    