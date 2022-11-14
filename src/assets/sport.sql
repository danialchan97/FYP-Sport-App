BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS "EventCalender" (
	"eventID"	INTEGER,
	"eventName"	TEXT,
	"eventLink"	TEXT,
	"phoneNumber"	TEXT,
	"eventDetails"	TEXT,
	PRIMARY KEY("eventID")
);
INSERT INTO "EventCalender" VALUES (1,'Health Awareness Campaign','http://www.malaysia-basketball.com/','0174586595','Health Awareness Campaign is held by Malaysia Basketball Association (MBA) in order to raise awareness regarding health to Malaysian People');
COMMIT;
