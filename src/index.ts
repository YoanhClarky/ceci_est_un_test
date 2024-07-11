import { AppDataSource } from "./config/data-source";
import { User } from "./entity/User";
import server from "./server";

AppDataSource.initialize()
  .then(async () => {
    console.log("tout");
    server.listen(3002, () => {
      console.log("server 3002");
    });
  })
  .catch((error) => console.log(error));
