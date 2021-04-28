import * as fs from 'fs';
import andytFile from "../../../data/andyt.json";
import evelyncFile from "../../../data/evelync.json";
import nurulaFile from "../../../data/nurula.json";
import vikrumbFile from "../../../data/vikrumb.json";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const method = req.method
    if(method !== "PUT") {
      return res.status(405).json({statusCode: 405, message: "method must be PUT"})
    }

    const dataProfiles = []
    const user = req.query.user
    const reqBody = req.body

    if (typeof reqBody.rating !== "number") {
      return res.status(400).json({statusCode: 400, message: "Request Rating must be number"})
    }
    if (reqBody.comment === "") {
      return res.status(400).json({statusCode: 400, message: "Request Comment must be filled"})
    }
    if (reqBody.name === "") {
      return res.status(400).json({statusCode: 400, message: "Request Name must be filled"})
    }
    
    dataProfiles.push(andytFile, evelyncFile, nurulaFile, vikrumbFile)
    //looping data profiles
    const result = dataProfiles.filter((profile) => profile.id === user);

    if(result.length > 0) {
      var resJson = result[0]
      resJson.testimonial.push(reqBody)
      var fileProfile = resJson.id + ".json"
      fs.writeFile('./pages/data/'+fileProfile, JSON.stringify(resJson, null, 2), (err) => {
        if (err) {
          return res.status(500).json({statusCode: 500, message: err.message})
        }
        return res.status(200).json({statusCode: 200, message : "success"})
      });
    } else {
      return res.status(404).json({statusCode: 404, message: "data profile is not exist"})
    }
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: error.message });
  }
};
