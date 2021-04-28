import andytFile from "../../data/andyt.json";
import evelyncFile from "../../data/evelync.json";
import nurulaFile from "../../data/nurula.json";
import vikrumbFile from "../../data/vikrumb.json";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    //fetch all data profiles
    const dataProfiles = []
    const user = req.query.user
    dataProfiles.push(andytFile, evelyncFile, nurulaFile, vikrumbFile)
    return res.status(200).json(dataProfiles)
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: error.message });
  }
};
