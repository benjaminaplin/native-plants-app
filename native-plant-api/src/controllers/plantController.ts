import express from "express";
import Plant from "../entities/Plant";
import { getRepository } from "typeorm";

export const addPlant = async (req: express.Request, res: express.Response) => {
  // console.log("REQ", req);
  console.log("req.BODY", req);
  const plantRepository = getRepository(Plant);
  const { body } = req;
  try {
    const plant = await plantRepository.query(
      `INSERT INTO plant (botanical_name, friendly_name, light_requirements, growing_seasonality, plant_type, plant_placement_order)
VALUES ('${body.botanical_name}', '${body.friendly_name}', '${body.light_requirements}', '${body.growing_seasonality}','${body.plant_type}','${body.plant_placement_order}');`
    );
    res.json(plant);
  } catch (error) {
    res.send(error);
  }
};

export const getPlants = async (
  req: express.Request,
  res: express.Response
) => {
  const plantRepository = getRepository(Plant);
  try {
    const plants = await plantRepository.query(`SELECT * FROM plant;`);

    console.log("*******plants", plants);
    res.json(plants);
  } catch (error) {
    res.send(error);
  }
};

export const getPlantsWithAttributes = async (
  req: express.Request,
  res: express.Response
) => {
  const plantRepository = getRepository(Plant);
  try {
    const plants = await plantRepository.query(
      `SELECT * FROM plants_with_attributes;`
    );
    console.log("*******plants", plants);
    res.json(plants);
  } catch (error) {
    res.send(error);
  }
};

// export const getPlantWithID = (req: express.Request, res: express.Response) => {
//     Plant.findById(req.params.PlantId, (err, Plant) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(Plant);
//     });
// }

// export const updatePlant = (req: express.Request, res: express.Response) => {
//     Plant.findOneAndUpdate({ _id: req.params.PlantId}, req.body, { new: true }, (err, Plant) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(Plant);
//     })
// }

// export const deletePlant = (req: express.Request, res: express.Response) => {
//     Plant.remove({ _id: req.params.PlantId }, (err, Plant) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json({ message: 'Successfully deleted Plant'});
//     })
// }
