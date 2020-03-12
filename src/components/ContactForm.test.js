import React from "react";

import { render, fireEvent } from "@testing-library/react";

import ContactForm from "./ContactForm";

// Name input only has a max-character length of 3
// fixed

test("minimum first name length", () => {
  const { getByTitle } = render(<ContactForm />);

  const firstNameInput = getByTitle("firstName");

  fireEvent.change(firstNameInput, {
    target: { name: "firstName", value: "Alex" }
  });
});
