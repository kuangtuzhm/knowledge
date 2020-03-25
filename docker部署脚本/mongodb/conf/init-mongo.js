db = db.getSiblingDB('admin');
db.createUser(
    {
        user: "tracker",
        pwd: "jimimongo@123456",
        roles: [
            { role: "readWrite", db: "tracker"}
        ]
    }
);
db = db.getSiblingDB('tracker');
db.createCollection("gps");
