
import mongoose from "mongoose";

const conn = () => {
    mongoose.connect(process.env.DB_URI, {
        dbName: 'lenslight',
        useUnifiedTopology: true,
    }).then(() => {
        console.log('CONNECTED TO THE DB SUCCESSFULLY');
    }).catch((err) => {
        console.log(`Db connection err: ${err}`);
    });

}

export default conn;