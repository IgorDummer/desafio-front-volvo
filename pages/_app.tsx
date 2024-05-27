import React from "react";

import "../public/css/styles.css";
import { StyleProvider, ThemePicker } from 'vcc-ui';
import { HomeComponent } from "../src/components/HomeComponent";

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <HomeComponent />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
