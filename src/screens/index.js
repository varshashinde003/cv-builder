import React from "react";
import loadable from "@loadable/component";

const Dashboard = loadable(() => import("./Dashboard"));

const Screens = () => <Dashboard />;

export default Screens;
