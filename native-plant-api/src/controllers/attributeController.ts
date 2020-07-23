import express from "express";
import Attribute from "../entities/Attribute";
import { getRepository } from "typeorm";

export const addAttribute = async (req: express.Request, res: express.Response) => {
  const attributeRepository = getRepository(Attribute);
  const { body } = req;
  try {
    const attribute = await attributeRepository.query(
      `INSERT INTO attribute (name) VALUES ('${body.name}');;`
    );
    res.json(attribute);
  } catch (error) {
    res.send(error);
  }
};

export const getAttributes = async (
  req: express.Request,
  res: express.Response
) => {
  const attributeRepository = getRepository(Attribute);
  try {
    const attributes = await attributeRepository.query(`SELECT * FROM attribute;`);
    res.json(attributes);
  } catch (error) {
    res.send(error);
  }
};

// export const getAttributeWithID = (req: express.Request, res: express.Response) => {
//     Attribute.findById(req.params.AttributeId, (err, Attribute) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(Attribute);
//     });
// }

// export const updateAttribute = (req: express.Request, res: express.Response) => {
//     Attribute.findOneAndUpdate({ _id: req.params.AttributeId}, req.body, { new: true }, (err, Attribute) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(Attribute);
//     })
// }

export const deleteAttribute = async (req: express.Request, res: express.Response) => {
  const attributeRepository = getRepository(Attribute);
  console.log('req', req)
  try {
    const attribute = await attributeRepository.query(
      `DELETE FROM attribute WHERE id=${req.params.id};`
    );
    res.json(attribute);
  } catch (error) {
    res.send(error);
  }
}
