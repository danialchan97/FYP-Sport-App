BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "product" (
	"id"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"name"	TEXT,
	"creatorId"	INTEGER
);
CREATE TABLE IF NOT EXISTS "developer" (
	"id"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"name"	TEXT,
	"skills"	TEXT,
	"img"	TEXT
);
INSERT INTO "product" VALUES (1,'Ionic Academy',1);
INSERT INTO "product" VALUES (2,'Software Startup Manual',1);
INSERT INTO "product" VALUES (3,'Ionic Framework',2);
INSERT INTO "product" VALUES (4,'Drifty Co',2);
INSERT INTO "product" VALUES (5,'Drifty Co',3);
INSERT INTO "product" VALUES (6,'Ionicons',3);
INSERT INTO "developer" VALUES (1,'Simon','','https://pbs.twimg.com/profile_images/858987821394210817/oMccbXv6_bigger.jpg');
INSERT INTO "developer" VALUES (2,'Max','','https://pbs.twimg.com/profile_images/953978653624455170/j91_AYfd_400x400.jpg');
INSERT INTO "developer" VALUES (3,'Ben','','https://pbs.twimg.com/profile_images/1060037170688417792/vZ7iAWXV_400x400.jpg');
COMMIT;
