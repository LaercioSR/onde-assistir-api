import { AppDataSource } from "../typeorm/dataSource";
import { app } from "./app";

const PORT = process.env.APP_PORT || 3333;

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
