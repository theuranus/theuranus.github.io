import React, { useState, useEffect } from "react";
import TextInput from "../components/TextInput";
import styled from "styled-components";
import { magicFunction, validation } from "../utils/theSoul";

const MagicForm = () => {
  /**
   * States for storing data
   */
  const [username, setUsername] = useState("");
  const [application, setApplication] = useState("");
  const [salt, setSalt] = useState("");
  const [result, setResult] = useState("");

  /**
   * States for controlling
   */
  const [view, setView] = useState("fill");
  const [copyText, setCopyText] = useState("Copy it!");

  const eventHandler = (event) => {
    // check Enter pressed
    if (view === "fill" && event.keyCode === 13) {
      doMagicFunction();
      setView("result");
    }
    // check Esc pressed
    if (view === "result" && event.keyCode === 27) {
      setView("fill");
      setResult("");
      setApplication("");
      setUsername("");
      setSalt("");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", eventHandler);
    return () => window.removeEventListener("keydown", eventHandler);
  }, [view, username, application, salt, result]);

  const doMagicFunction = () => {
    const validUsername = validation(username, "james.nguyen");
    const validApplication = validation(application, "application");
    const validSalt = validation(salt, "james.ng");
    let magicString = magicFunction(`${validUsername}&${validApplication}`, {
      salt: validSalt,
      rounds: 10,
    });
    magicString = magicString.substring(magicString.length - 8);
    const specialCharacters = ".!@#$%^&*=";
    magicString = `${String.fromCharCode(
      97 + (validUsername.length % 26)
    )}${String.fromCharCode(65 + (validApplication.length % 26))}${
      validSalt.length % 10
    }${specialCharacters[validSalt.length % 10]}${magicString}`;
    setResult(magicString);
  };

  return (
    <StyledApp>
      <StyledForm>
        <h2>Magic Form</h2>
        <div className="input">
          {view === "fill" ? (
            <>
              <TextInput
                key={1}
                label="My lord"
                type="password"
                value={username}
                onChange={(value) => setUsername(value)}
                placeholder="James Nguyen"
              />
              <TextInput
                label="Target"
                type="text"
                value={application}
                onChange={(value) => setApplication(value)}
                placeholder="Facebook"
              />
              <TextInput
                label="Salt"
                type="password"
                value={salt}
                onChange={(value) => setSalt(value)}
                placeholder="s4lty sTr!n9"
              />
              <TextInput
                type="submit"
                btnText="Attack!"
                onClick={() => {
                  doMagicFunction();
                  setView("result");
                }}
              />
            </>
          ) : (
            <>
              <TextInput
                key={2}
                label="Booty"
                type="password"
                value={result}
                readOnly={true}
                placeholder="Nothing :'(, We lost"
                elId="james-result"
              />
              <TextInput
                type="submit"
                btnText={copyText}
                onClick={() => {
                  const el = document.getElementById("james-result");
                  if (!el) {
                    return;
                  }
                  el.select();
                  el.type = "text";
                  el.setSelectionRange(0, 99999);
                  document.execCommand("copy");
                  setCopyText("Copied!");
                  setTimeout(() => {
                    el.type = "password";
                    setCopyText("Copy it!");
                  }, 500);
                }}
              />
              <TextInput
                type="submit"
                btnText="↞ Go back"
                onClick={() => {
                  setView("fill");
                  setResult("");
                  setApplication("");
                  setUsername("");
                  setSalt("");
                }}
              />
            </>
          )}
        </div>
        <p className="help">
          Need any help ? <a href="mailto:theuranus.ntb@gmail.com">Email me!</a>
        </p>
      </StyledForm>
    </StyledApp>
  );
};

export default MagicForm;

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 50px);
`;

const StyledForm = styled.div`
  position: relative;
  width: 350px;
  padding: 40px 40px 60px;
  background: #131419;
  border-radius: 10px;
  text-align: center;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.05),
    5px 5px 15px rgba(0, 0, 0, 0.5);
  h2 {
    color: #c7c7c7;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 4px;
  }
  .input {
    text-align: left;
    margin-top: 40px;
  }
  .help {
    margin-top: 30px;
    color: #555;
  }
  .help a {
    color: #ff0047;
  }
`;
