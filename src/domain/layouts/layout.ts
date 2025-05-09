import { ActionDescriptor } from "../descriptors/action.descriptor";
import { Component } from "./components";
import { NavBar } from "./navbar";

export interface Layout {
    screenId: string;
    layoutVersion: number;
    backgroundColor: string;
    navbar: NavBar;
    components: Component[];
    action?: ActionDescriptor;
  }