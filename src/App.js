import { AppBar, Button, Toolbar } from "@mui/material";
import "./App.css";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="App">
      <AppBar
        sx={{ backgroundColor: "black", color: "white" }}
      >
        <Toolbar className="navbar">
          <div>
            <img
              className="logo"
              src="https://i.ibb.co/RpcZvjV/logo.jpg"
              alt=""
            />
          </div>

          <div>
            <select className="Category">
              <option value="0">Category</option>
            </select>
          </div>
          <div>Home</div>
          <div>Manufacturers</div>
          <div>Customers</div>
          <div>About</div>
          <div>Blog & News</div>
          <div>FAQ</div>
          <Button
            variant="contained"
            href="#contained-buttons"
          >
            Login/Register
          </Button>
        </Toolbar>
      </AppBar>

      <div className="searchbar">
        <img
          src="https://images.unsplash.com/photo-1519752594763-2633d8d4ea29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search for a product or manufacturers"
        />
        <Button
          className="searchbotton"
          sx={{
            backgroundColor: "blue",
            borderRadiusRight: "16px",
          }}
          variant="contained"
          href="#contained-buttons"
        >
          <span class="material-symbols-outlined">
            search
          </span>
        </Button>
      </div>
      

      </div>
  );
}

export default App;
