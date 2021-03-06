import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import List from "./comp/List";
import CircularProgress from "@material-ui/core/CircularProgress";
import Admin from "./comp/Admin";
import VolumeButton from "./comp/VolumeButton";
import Dialog from "./comp/Dialog";
// import Cookies from 'js-cookie'
import io from "socket.io-client";

const socketURL = "https://shielded-inlet-52440.herokuapp.com/";

const socket = io(socketURL);

function App() {
  const [data, setData] = useState();
  const [refresh, setRefresh] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const URL = "https://shielded-inlet-52440.herokuapp.com";
  useEffect(() => {
    fetch(`${URL}/dostepnosc`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, [refresh]);

  useEffect(() => {
    // setInterval(() => {
    //   setRefresh((prev) => prev + 1);
    // }, 25000);
    socket.on("data", (data) => {
      setData(data);
    });
  }, []);

  return (
    <>
      {data ? (
        <Switch>
          <Route path="/" exact>
            <div className="app">
              <div className="playstation5">
                <div className="image">
                  <img
                    src="https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20?$native--t$"
                    alt="Playstation 5"
                  />
                </div>
                <div className="shops">
                  <List data={data} isMuted={isMuted} />
                </div>
              </div>
              {/* <RefreshTimer /> */}
              <div className="buttons">
                <Dialog />
                {data[data.length - 1] && (
                  <div className="update">
                    Ostatnia aktualizacja: {data[data.length - 1].lastUpdate}
                  </div>
                )}

                <VolumeButton isMuted={isMuted} setIsMuted={setIsMuted} />
              </div>
            </div>
          </Route>
          <Route path="/admin" component={Admin}></Route>
        </Switch>
      ) : (
        <div
          className="progress"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <CircularProgress />
        </div>
      )}
    </>
  );
}

export default App;
