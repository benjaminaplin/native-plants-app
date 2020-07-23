import express from "express";
import {
  addAttribute,
  getAttributes,
  deleteAttribute,
} from "../controllers/attributeController";

const AttributeRoutes = (app: express.Application) => {
  app.route("/attributes").get((req, res, next) => {
    console.log(`GET Request from: ${req.originalUrl}`);
    console.log(`GET Request type: ${req.method}`);
    next();
  }, getAttributes);

  app.route("/attributes").post((req, res, next) => {
    console.log(`POST Request from: ${req.originalUrl}`);
    console.log(`POST Request type: ${req.method}`);
    next();
  }, addAttribute);

  app.route("/attributes/:id").delete((req, res, next) => {
    console.log(`DEL Request from: ${req.originalUrl}`);
    console.log(`DEL Request type: ${req.method}`);
    next();
  }, deleteAttribute);
};

export default AttributeRoutes;
