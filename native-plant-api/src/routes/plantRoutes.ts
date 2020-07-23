import express from 'express'
import {
  addPlant,
  getPlants,
  getPlantsWithAttributes,
} from "../controllers/plantController";

const PlantRoutes = (app: express.Application) => {
    app.route('/plants')
    .get((req, res, next) => {
        console.log(`GET Request from: ${req.originalUrl}`)
        console.log(`GET Request type: ${req.method}`)
        next();
    }, getPlants)
    
    app.route('/plants')
    .post((req, res, next) => {
        console.log(`POST Request from: ${req.originalUrl}`)
        console.log(`POST Request type: ${req.method}`)
        next();
    }, addPlant)

    app.route('/plants-with-attributes')
    .get((req, res, next) => {
        console.log(`POST Request from: ${req.originalUrl}`)
        console.log(`POST Request type: ${req.method}`)
        next();
    }, getPlantsWithAttributes)
    
    // POST endpoint
    // .post(addNewPlant);

    // app.route('/Plant/:PlantId')
    // // get specific Plant
    // .get(getPlantWithID)
    
    // // put request
    // .put(updatePlant)

    // // delete request
    // .delete(deletePlant);
}

export default PlantRoutes;
