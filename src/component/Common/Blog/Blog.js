import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Blog = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="container my-5" style={{ minHeight: "100vh" }}>
      <h3 className="text-center text-secondary fw-light">
        Question and Answer
      </h3>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Question-1
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            What is the different between Javascript and NodeJS?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Number</th>
                  <th scope="col">Javascript</th>
                  <th scope="col">NodeJs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>
                    Javascript is a programming language that is used for
                    writing scripts on the website.{" "}
                  </td>
                  <td>NodeJS is a Javascript runtime environment.</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Javascript can only be run in the browsers. </td>
                  <td>
                    We can run Javascript outside the browser with the help of
                    NodeJS.
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>It is basically used on the client-side. </td>
                  <td>It is mostly used on the server-side.</td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>
                    Javascript is capable enough to add HTML and play with the
                    DOM.{" "}
                  </td>
                  <td>Nodejs does not have capability to add HTML tags.</td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>
                    Javascript can run in any browser engine as like JS core in
                    safari and Spidermonkey in Firefox.
                  </td>
                  <td>
                    V8 is the Javascript engine inside of node.js that parses
                    and runs Javascript.
                  </td>
                </tr>
                <tr>
                  <th>6</th>
                  <td>Javascript is used in frontend development.</td>
                  <td>Nodejs is used in server-side development.</td>
                </tr>
                <tr>
                  <th>7</th>
                  <td>
                    Some of the javascript frameworks are RamdaJS, TypedJS, etc.{" "}
                  </td>
                  <td>
                    Some of the Nodejs modules are Lodash, express etc. These
                    modules are to be imported from npm.{" "}
                  </td>
                </tr>
                <tr>
                  <th>8</th>
                  <td>
                    It is the upgraded version of ECMA script that uses Chrome’s
                    V8 engine written in C++.{" "}
                  </td>
                  <td>Nodejs is written in C, C++ and Javascript.</td>
                </tr>
              </tbody>
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Question-2
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            When we Use to Node.js and MongoDB
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Putting together a technology stack for a project is a task in
            itself. Choosing the right languages, tools and platforms can
            determine a lot of aspects of the future app functioning – from the
            straightforwardness of development to the performance and
            efficiency. Thus, it is critical to make the right choice in the
            beginning. If you have a web application project in mind, you are,
            most probably, evaluating the pros and cons of building your stack
            around JavaScript and the tools using it. Sooner or later, you will
            think of the backend development platform, and surely come across
            Node.js.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Question-3
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Difference between SQL and NoSQL
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              When it comes to choosing a database the biggest decisions is
              picking a relational (SQL) or non-relational (NoSQL) data
              structure. While both the databases are viable options still there
              are certain key differences between the two that users must keep
              in mind when making a decision.
            </p>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Number</th>
                  <th scope="col">SQL</th>
                  <th scope="col">NoSQL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                  <td> Non-relational or distributed database system</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>
                    These databases have fixed or static or predefined schema
                  </td>
                  <td>They have dynamic schema</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>
                    These databases are not suited for hierarchical data
                    storage.
                  </td>
                  <td>
                    These databases are Best suited for hierarchical data
                    storage.
                  </td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>These databases are best suited for complex queries</td>
                  <td>These databases are not so good for complex queries</td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>Vertically Scalable</td>
                  <td>Horizontally scalable</td>
                </tr>
                <tr>
                  <th>6</th>
                  <td>Follows ACID property</td>
                  <td>
                    Follows CAP(consistency, availability, partition tolerance)
                  </td>
                </tr>
              </tbody>
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Question-4
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Purpose of using JWT & How it's Work?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              JWT stands for JSON Web Token. It is an Open standard (RFC 7519)
              which is used to securely transfer information between two
              parties.
            </p>
            <p>
              In short we can say, JWT is useful for Authorization and
              Information exchange.
            </p>
            <h5>Advantages of JWT</h5>
            <ol>
              <li>
                It is compact – Can be sent via URL/ Post request/HTTP Header
                which makes it fast for transmission and usable.
              </li>
              <li>
                Self Content – It contains the details of user (not session id
                in cookies like traditional request), so no need to query
                database to get user details.
              </li>
              <li>Digitally signed – Information is verified and trusted.</li>
              <li>
                Transfer information between two bodies. Bodies means user,
                sever etc./user, sever etc. is meant by Bodies.
              </li>
              <li>
                Can be used in most of the programming languages as it can be
                mapped directly to the object.
              </li>
              <li>
                JWTs can be signed using a secret (with the HMAC algorithm) or a
                public/private key pair using RSA or ECDSA.
              </li>
            </ol>
            <h5>How it's Work</h5>
            <ol>
              <li>
                Client (Browser) sends post request with credentials to server.
              </li>
              <li>
                Server authenticates user credential and generates JWT + secret.
                Server is not storing anything in this case which will save
                server memory and improve performance.
              </li>
              <li>Sends the JWT on the authorization header.</li>
              <li>Sends response to browser.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Blog;
