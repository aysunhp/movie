import React from "react";
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";
import { CardBody } from "react-bootstrap";

const Task = () => {
  const [input, setInput] = useState("");
  const [city, setCity] = useState({});
  const [username, setusername] = useState("");
  const [user, setuser] = useState({});
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      {/* <Button
        onClick={(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=fd4c60422b14eae30feba804903af9c3`) => {
          axios.get(``).then((res) => {
            let cityData = res.data;
            console.log(cityData);
            return setCity(cityData);
          });
        }}
      >
        Search
      </Button> */}
      <Card style={{ width: "18rem" }}>
        <Card.Img
          src="https://api.openweathermap.org/data/2.5/weather?q=`${input}&`units=metric&appid=fd4c60422b14eae30feba804903af9c3"
          variant="top"
        />
        <CardBody>
          {city.name && (
            <>
              <p>{city.name}</p>
              <p>Clouds: {city.clouds.all}</p>
              <p>
                Coord:lon:{city.coord.lon} {city.coord.lat}{" "}
              </p>
            </>
          )}
        </CardBody>
      </Card>

      <br />
      <br />
      <input
        type="text"
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />

      <Button
        onClick={() => {
          axios.get(`https://api.github.com/users/${username}`).then((res) => {
            console.log(res.data);
            setuser(res.data);
          });
        }}
      >
        Search
      </Button>
      {user.login && (
        <Card style={{ width: "18rem" }}>
          <Card.Img src={user.avatar_url}></Card.Img>
          <CardBody>
            {user.login && (
              <>
                <p>{user.login}</p>
                {/* <p>{user}</p>
              <p>{user}</p> */}
              </>
            )}
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default Task;
