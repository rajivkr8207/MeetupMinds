import React from "react";
import Courses from "./Courses";
import Certificate from "./Certificate";

const Main = () => {
  const pic =
    "https://images.unsplash.com/photo-1659079631665-eb95370fb173?q=80&w=1630&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <div
        className="container mx-auto lg:w-[78vw] w-full h-[80vh] rounded-lg my-5 bg-center bg-cover"
        style={{
          backgroundImage: `url(${pic})`,
        }}
      ></div>
      <hr className="border border-black w-[70vw] mx-auto my-3" />
      <Courses />
      <Certificate />
    </>
  );
};

export default Main;
