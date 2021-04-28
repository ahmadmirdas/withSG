import andytFile from "../../data/andyt.json";
import evelyncFile from "../../data/evelync.json";
import nurulaFile from "../../data/nurula.json";
import vikrumbFile from "../../data/vikrumb.json";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if(req.method !== "GET") {
      res.status(405).json({statusCode: 405, message: "method GET"})
    }
    const dataProfiles = []
    const user = req.query.user
    dataProfiles.push(andytFile, evelyncFile, nurulaFile, vikrumbFile)
    //looping data profiles
    const result = dataProfiles.filter((profile) => profile.id === user);

    if(result.length > 0) {
      res.status(200).json(result[0])
    } else {
      res.status(404).json({statusCode: 404, message: "data profile is not exist"})
    }
    return;
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: error.message });
  }
};
