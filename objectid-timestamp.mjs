import { ObjectId } from "bson";

const id = process.argv[2];
const timestamp = ObjectId.createFromHexString(id).getTimestamp();
console.log(timestamp);
