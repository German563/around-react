import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React, { useState } from 'react';



function App() {
  function handleEditProfileClick() {
    const popup = document.querySelector(".popup_type_edit-profile");
    popup.classList.add("popup_opened");
  }
  
  return (
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/x-icon" href="../src/favicon.ico" />
    <title>Around US</title>
  </head>
  

  <body>
    <div className="page">
      <div className="page__background"></div>
      <Header />
      <Main 
        onEditProfileClick={handleEditProfileClick}

      />
      <Footer />
    </div>
  </body>
</html>
  );
}

export default App;